angular.module('starter.factories', [])

.factory('firebaseFactory', function($q, $http){
  return {
    postForm: (form) => {
      return $q.resolve($http.post(`https://frontend-cap.firebaseio.com/destination/.json`, form));
    },
    getForm: () => {
      return $http.get(`https://frontend-cap.firebaseio.com/.json`)
      .then((val)=> val )
    },
    deleteForm: (key) => {
      return $http.delete(`https://frontend-cap.firebaseio.com/destination/${key}/.json`);
    },
    postInfo: (infonote) => {
      return $q.resolve($http.post(`https://frontend-cap.firebaseio.com/info/.json`, infonote));
    },
    getInfo: () => {
      return $http.get(`https://frontend-cap.firebaseio.com/info.json`)
      .then((val)=> val )
    }
  }
})

.factory('arrFactory', function(){
  return {
    cleanArr: (arr) => {
      let a = [], prev;
      arr.sort()
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] !== prev) {
              a.push(arr[i]);
          }
          prev = arr[i];
      }
      return a;
    }
  }
})
