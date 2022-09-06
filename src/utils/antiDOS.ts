var ipTables = {};   // массив IP адресов зергов 
var maxTime = 10000;   // 30000 = 3 sec  время проверки 
var maxCount = 20;   // макс кол-во запросов после 1 обращения за maxTime время 
var hardMode = 5;  // устанавливаем бан еще  на maxTime если достигнуто maxCount*hardMode
export const antiDOS = (req, res, next) => {

    var ip = req.ip;
    var time = Date.now();
    console.log(`________ ${req.method} url:: ${req.url} ip:: ${req.ip} time:: ${time}`);

    if(ip in ipTables) {

        if(time - ipTables[ip].time > maxTime ) {
	    console.log(`UNBAN:: ${req.ip}`);
            ipTables[ip] = {
                count: 0,
                time
            };
            //return;
        };

	ipTables[ip].count++;
///////////////////////////////	ipTables[ip].time = time;
	console.log(`CNT:: ${ipTables[ip].count} of ${maxCount} (${maxCount*hardMode}) reached`);


	// большой дос 
        if(ipTables[ip].count > hardMode*maxCount) {
	// стратегия 1 начнем с нуля т.е. еще на 30 секунд
	//  ipTables[ip].time = time;

	// стратегия 2 добавим столько же секунд сколько он сделал запросов 
	  ipTables[ip].time = ipTables[ip].time+ipTables[ip].count;

	  console.log(`SERIOUS SAM ATTACK DETECTED:: ${req.ip}`);
	  var unban = (maxTime/1000) - (time - ipTables[ip].time)/1000;
	  console.log(`ZERG BANNED:: ${req.ip} unban in ${unban} seconds`);
	  return;
        }

	// маленький дос 
        if(ipTables[ip].count > maxCount) {
	  var unban = (maxTime/1000) - (time - ipTables[ip].time)/1000;
	  console.log(`ZERG BANNED:: ${req.ip} unban in ${unban} seconds`);
	  return;
        }
    }

    else {
        console.log(`init`);
	    ipTables[ip] = {
	        count: 1,
	        time
		};
	};

  // похож на нормального 
  next()
}

// export const antiDOS = (req, res, next) => {
//     let ip = req.ip;
//     let time = Date.now();
  
//     if (ip in ipTables) {
//       if (time - ipTables[ip].time > maxTime) {
//         ipTables[ip] = {
//           count: 0,
//           time,
//         };
//       }
  
//       ipTables[ip].count++;
  
//       if (ipTables[ip].count > hardMode * maxCount) {
//         ipTables[ip].time = ipTables[ip].time + ipTables[ip].count;
//         return;
//       }
  
//       if (ipTables[ip].count > maxCount) {
//         return;
//       }
//     } else {
//       ipTables[ip] = {
//         count: 1,
//         time,
//       };
//     }
//     next();
//   };
