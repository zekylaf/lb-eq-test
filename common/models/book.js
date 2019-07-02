'use strict';

module.exports = function(Book) {

  Book.createExample = function(){

    let test_data = {
      title: {
        name: "book name",
        description: "book description"
      }
    };

    return new Promise((resolve, reject) => {
      Book.create(test_data, (err, res) => {
        if (err) return reject(err);
        return resolve(res);
      });
    });
  }

};
