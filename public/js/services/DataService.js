angular.module('DataService', []).factory('Data', ['$http', '$q', function($http, $q) {

  const setUserId = () => {};

  const getUserStoreList = () => $q.when([
    { id: 1, name: 'Monoprix - rue de la Boétie', missingProducts: [] },
    { id: 2, name: 'Monoprix - rue du Bac', missingProducts: ['Beurre doux Président 250g'] },
    { id: 3, name: 'Monoprix - rue du Commerce', missingProducts: ['Beurre doux Président 250g'] },
  ]);

  const getNeedList = (duration) => {
    const get = () => {
      const list = ['Tomates', 'Pâtes', 'Papier toilette'];
      if(duration<=1) return list;
      list.push(...['Beurre', 'Cracottes']);
      if(duration<=3) return list;
      list.push(...['Pastilles vaisselle', 'Litière', 'Croquettes', 'Haricots', 'Jambon', 'Lait']);
      if(duration<=7) return list;
      list.push(...['Brosse à dent', 'Chocolat', 'Oignons', 'Essuie-tout']);
      return list;      
    }
    return $q.when(get());
  }

  const userHabits = [
    {category: 'Tomates', product: 'Rayon frais - tomates', quantity: 1, price: 1},
    {category: 'Pâtes', product: 'Panzani Spaghetti No.1', quantity: 1, price: 1},
    {category: 'Papier toilette', product: 'Lotus Confort 6 rouleaux', quantity: 1, price: 1},
    {category: 'Beurre', product: 'Beurre doux Président 250g', quantity: 1, price: 1},
    {category: 'Cracottes', product: 'Cracottes LU original', quantity: 1, price: 1},
    {category: 'Pastilles vaisselle', product: 'Sun Tablets 3 en 1', quantity: 1, price: 1},
    {category: 'Litière', product: 'Sanicat', quantity: 1, price: 1},
    {category: 'Croquettes', product: 'Purina One - chats adultes', quantity: 1, price: 1},
    {category: 'Haricots', product: 'Bocal haricots blancs Monoprix', quantity: 1, price: 1},
    {category: 'Jambon', product: 'Herta Paris 2 tranches', quantity: 1, price: 1},
    {category: 'Lait', product: 'Lait écrémé Monoprix', quantity: 1, price: 1},
    {category: 'Brosse à dent', product: 'Colgate 360', quantity: 1, price: 1},
    {category: 'Chocolat', product: 'Lindt Noir 70%', quantity: 1, price: 1},
    {category: 'Oignons', product: 'Rayon frais - oignons', quantity: 1, price: 1},
    {category: 'Essuie-tout', product: 'Okay 3 rouleaux demi-feuille', quantity: 1, price: 1},
  ];

  let userSelection = userHabits.slice(0,2);
  const setUserList = (list) => {
    userSelection = list.map(item => userHabits.filter(habit => habit.category === item)[0]);
  };
  
  const getUserProductList = () => {
    return $q.when(userSelection);
  };

  let userCart = userHabits.slice(0,2);
  const setUserCart = (cart) => {
    userCart = cart;
  }

  let userStore;
  
  const setUserStore = (store) => {
    userStore = store;
  }

  return { getUserStoreList, getNeedList, setUserList, getUserProductList, setUserCart };

}]);