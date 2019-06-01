const repl = require('repl');
//
repl.start({
    ignoreUndefined: true, // не выводим undefined 
    replMode: repl.REPL_MODE_STRICT // запускаем в строгом режиме
});
