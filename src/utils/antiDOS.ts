export const antiDOS = (req, res, next) => {
    let ip = req.ip;
    let time = Date.now();
  
    if (ip in ipTables) {
      if (time - ipTables[ip].time > maxTime) {
        ipTables[ip] = {
          count: 0,
          time,
        };
      }
  
      ipTables[ip].count++;
  
      if (ipTables[ip].count > hardMode * maxCount) {
        ipTables[ip].time = ipTables[ip].time + ipTables[ip].count;
        return;
      }
  
      if (ipTables[ip].count > maxCount) {
        return;
      }
    } else {
      ipTables[ip] = {
        count: 1,
        time,
      };
    }
    next();
  };
