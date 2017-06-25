angular.module('DataService', []).factory('Data', ['$http', '$q', function($http, $q) {

  const products = [
    { category: 'beurre', product: 'beurre doux président 250g', quantity: 1, price: 2.34 },
    { category: 'lait', product: 'lait écrémé monoprixbio monop 1L', quantity: 1, price: 1.64 },
    { category: 'kellogs' },
    { category: 'jambon', product: 'jambon 4 tranches, fleury m.', quantity: 2, price: 3.53 },
    { category: 'pq', product: 'lotus papier toilette blc pqt 6', quantity: 1, price: 1.79 },
    { category: 'rasoir', product: 'gillette le rasoir', quantity: 1, price: 4.32 },
  ]

  const getEstimatedNeedList = (duration) => {
    return $q.when(products.slice(0,4).map(p => p.category));
  };

  let userSelection = products.slice(0,4);
  const setNeedList = (list) => {
    userSelection = list.map(item => products.filter(p => p.category === item)[0]);
  };

  const getUserProductList = () => $q.when(userSelection);

  let userCart = userSelection.slice(0,2);
  const setUserCart = (cart) => {
    userCart = cart;
  }

  let stores = [
    {
      name: 'Monoprix - rue de la Boétie',
      openingTime: '2017-06-25T09:00:00+0200',
      closingTime: '2017-06-25T22:00:00+0200',
      deliveryTime: '2017-06-25T18:00:00+0200',
      pickUpTime: '2017-06-25T17:00:00+0200',
      missingProducts: [],
    },
    {
      name: 'Monoprix - rue du Bac',
      openingTime: '2017-06-25T09:00:00+0200',
      closingTime: '2017-06-25T22:00:00+0200',
      deliveryTime: '2017-06-25T18:00:00+0200',
      pickUpTime: '2017-06-25T17:00:00+0200',
      missingProducts: ['Beurre doux Président 250g'],
    },
    {
      name: 'Monoprix - rue du Commerce',
      openingTime: '2017-06-25T09:00:00+0200',
      closingTime: '2017-06-25T22:00:00+0200',
      deliveryTime: '2017-06-25T18:00:00+0200',
      pickUpTime: '2017-06-25T17:00:00+0200',
      missingProducts: ['Beurre doux Président 250g'],
    },
  ];

  const getUserStoreList = () => $q.when(stores);

  let userStore = stores[0];
  const setUserStore = (store) => {
    userStore = store;
  }

  const getUserStore = () => $q.when(userStore);

  let deliveryDate = new Date();
  deliveryDate.setTime(deliveryDate.getTime()+3600000);

  const setDeliveryDate = (dt) => {
    deliveryDate = dt;
  }

  const getDeliveryDate = () => $q.when(deliveryDate);

  const getUserCart = () => $q.when(userCart);

  return {
    getEstimatedNeedList, setNeedList, // define needs
    getUserProductList, setUserCart,  // define products
    getUserStoreList, setUserStore, // define store
    getUserStore, setDeliveryDate, // define delivery
    getDeliveryDate, getUserCart, // summary
 };

}]);