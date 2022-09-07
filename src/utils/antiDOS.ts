module.exports = function (options: {
    maxTime?: number;
    maxCount?: number;
    hardMode?: number;
    consoleDebug?: boolean;
  }) {
  const ipTables: Record<string, any> = {}; // массив IP адресов зергов
  const maxTime = options.maxTime || 3000; // время проверки
  const maxCount = options.maxCount || 50; // макс кол-во запросов после 1 обращения за maxTime время
  const hardMode = options.hardMode || 5; // устанавливаем бан еще  на maxTime если достигнуто maxCount*hardMode
  const consoleDebug = options.consoleDebug || false; // отладка в консоли

  function _log(str: string) {
    if (consoleDebug) {
      console.log(str);
    }
  }

  return function (req: any, res: any, next: any) {
    var ip = req.ip;
    var time = Date.now();
    _log(
      `________ ${req.method} url:: ${req.url} ip:: ${req.ip} time:: ${time}`
    );

    if (ip in ipTables) {
      if (time - ipTables[ip].time > maxTime) {
        _log(`UNBAN:: ${req.ip}`);
        ipTables[ip] = {
          count: 0,
          time,
        };
      }

      ipTables[ip].count++;
      _log(
        `CNT:: ${ipTables[ip].count} of ${maxCount} (${
          maxCount * hardMode
        }) reached`
      );
      if (ipTables[ip].count > hardMode * maxCount) {
        ipTables[ip].time = ipTables[ip].time + ipTables[ip].count;

        _log(`SERIOUS ATTACK DETECTED:: ${req.ip}`);
        var unban = maxTime / 1000 - (time - ipTables[ip].time) / 1000;
        _log(`ENEMY BANNED:: ${req.ip} unban in ${unban} seconds`);
        return;
      }

      // маленький дос
      if (ipTables[ip].count > maxCount) {
        var unban = maxTime / 1000 - (time - ipTables[ip].time) / 1000;
        _log(`ENEMY BANNED:: ${req.ip} unban in ${unban} seconds`);
        return;
      }
    } else {
      _log(`init`);
      ipTables[ip] = {
        count: 1,
        time,
      };
    }

    next();
  };
}
