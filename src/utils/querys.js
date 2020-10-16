app.get('/main', function (req,res) {
    var lock = 2;
    var result = {};
    result.preseleccion_array = [];
    result.up_array = [];

    var finishRequest = function(result) {
        req.session.preseleccion_array = result.preseleccion_array;
        req.session.up_array = result.up_array;
        res.render('index.js', {layout: false, locals: { cod_preseleccion: result.preseleccion_array, cod_up: result.up_array }});
    };

    // first query
    var q1 = function(fn) {
      var sql = 'select cod_preseleccion from preseleccion';
      db.execute(sql)
          .addListener('row', function(r) {
              result.up_array.Push( {cod_up: r.cod_up } );
          })
          .addListener('result', function(r) {
              return fn && fn(null, result);
        });
    };
/*
    // second query
    var q2 = function(fn) {
      var sql = 'select remito from preseleccion_remitos';
      db.execute(sql)
          .addListener('row', function(r) {
              result.remito_array.Push( { remito: r.remito } );
          })
          .addListener('result', function(r) {
              return fn && fn(null, result);
          });
    }

    //Standard nested callbacks
    q1(function (err, result) {
      if (err) { return; //do something}

      q2(function (err, result) {
        if (err) { return; //do something}

        finishRequest(result);
      });
    });

    //Using async.js
    async.list([
        q1,
        q2,
    ]).call().end(function(err, result) {
      finishRequest(result);
    });

});