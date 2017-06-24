angular.module('DeliveryCtrl', ['DataService'])
.controller('DeliveryController', ['$scope', '$location', 'Data', function($scope, $location, Data) {

  const dateAfter = (dt, hours) => {
    const after = new Date();
    after.setTime(dt.getTime() + hours * 3600000);
    return after;
  }
  const daysFromTo = (dt1,dt2) => Math.round((dt2 - dt1)/(1000*60*60*24))

  const weekDays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const formatDay = (dt) => {
    switch(daysFromTo(new Date(), dt)) {
      case 0: return 'aujourd\'hui';
      case 1: return 'demain';
      default: return weekDays[dt.getDay()];
    }
  };

  const pad = (number, c='0', size=2) => (Array(size).fill(c).join('')+number).slice(-size);
  const getTime = $scope.getTime = (dt) => pad(dt.getHours())+':'+pad(dt.getMinutes());


  const getTimeRange = (dt1, dt2, interval=30) => {
    let [[h1,m1],[h2,m2]] = [dt1,dt2].map(dt => getTime(dt).split(':').map(x=>parseInt(x)));
    m1 = interval * Math.ceil(m1/interval);
    m2 = interval * Math.floor(m1/interval);

    const range = [];
    while(h1 < h2) {
      range.push(pad(h1)+':'+pad(m1));
      m1+=interval;
      if(m1===60) {
        m1 = 0; h1++;
      }
    }
    while(m1 < m2) {
      range.push(pad(h1)+':'+pad(m1));
      m1+=interval;
    }
    console.log(range);
    return range;
  }

  $scope.data = {};

  let nextDay = new Date();
  $scope.nextWeek = [];
  for(let d = 0; d<7; d++) {
    $scope.nextWeek.push({value: nextDay, label: formatDay(nextDay)});
    nextDay = dateAfter(nextDay, 24);
  }
  $scope.data.chosenDay = $scope.nextWeek[0];

  Data.getUserStore().then((store) => {
    $scope.data.store = Object.assign(store, {
      deliveryTime: new Date(store.deliveryTime),
      pickUpTime: new Date(store.pickUpTime),
      closingTime: new Date(store.closingTime),
      openingTime: new Date(store.openingTime),
    });
    const possibleDelivery = dateAfter(new Date(), 1);
    if(possibleDelivery.getHours() > store.closingTime.getHours()) {
      $scope.nextWeek.shift();
    }
    $scope.data.chosenDay = $scope.nextWeek[0];
    $scope.updateHours();
  });

  $scope.updateHours = () => {
    const possibleDelivery = dateAfter(new Date(), 1);
    if($scope.data.chosenDay.label==='aujourd\'hui' && possibleDelivery > $scope.data.store.openingTime) {
      $scope.timeRange = getTimeRange(dateAfter(new Date(), 1), $scope.data.store.closingTime);
      $scope.data.chosenHour = $scope.timeRange[0];
    } else {
      $scope.timeRange = getTimeRange($scope.data.store.openingTime, $scope.data.store.closingTime);
      $scope.data.chosenHour = $scope.timeRange[0];
    }
  }
  $scope.validate = () => {
    const [h,m] = $scope.data.chosenHour.split(':').map(x=>parseInt(x));
    const deliveryDate = $scope.data.chosenDay.value;
    deliveryDate.setHours(h);
    deliveryDate.setMinutes(m);
    Data.setDeliveryDate(deliveryDate);
    $location.path('/payment');
  };

}]);