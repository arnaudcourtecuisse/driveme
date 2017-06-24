angular.module('DataService', []).factory('Data', ['$http', function($http) {
  const getFavoriteShops = (userId) => Promise.resolve([
    { name: 'MONOPRIX - RUE DE LA BOÉTIE', zipCode: '75008' },
    { name: 'MONOPRIX - RUE DU BAC', zipCode: '75007' },
    { name: 'MONOPRIX - RUE DU COMMERCE', zipCode: '75015' },
  ]);

  const getNeedList = (userId, duration) => {
    const get = () => {
      const list = ['Tomates', 'Pâtes', 'Papier toilette'];
      if(duration<=1) return list;
      list.push(...['Beurre', 'Cracottes']);
      if(duration<=3) return list;
      list.push(...['Pastilles vaisselle', 'Litière', 'Croquettes', 'Haricots', 'Jambon', 'Lait']);
      if(duration<=7) return list;
      list.push(...['Brosse à dent', 'Chocolat', 'Oignons', 'Sopalin']);
      return list;      
    }
    return Promise.resolve(get());
  }
  return { getFavoriteShops, getNeedList }
}]);