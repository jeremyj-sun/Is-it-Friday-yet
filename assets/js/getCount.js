

//GetCount(dateFuture) consumes the next Friday updates countbox string every second. 
export async function GetCount(dateFuture) {

    while (true) {
        let dateNow = new Date();                                             //grab current date
        let amount = dateFuture.getTime() - dateNow.getTime();                //calc milliseconds between dates
        dateNow = null;

        // time is already past
        if (amount < 0) {
            document.getElementById('countbox').innerHTML = "Now!";
        }
        // date is still good
        else {
            let days = 0; let hours = 0; let mins = 0; let secs = 0; let out = "";

            amount = Math.floor(amount / 1000);//kill the "milliseconds" so just secs

            days = Math.floor(amount / 86400);//days
            amount = amount % 86400;

            hours = Math.floor(amount / 3600);//hours
            amount = amount % 3600;

            mins = Math.floor(amount / 60);//minutes
            amount = amount % 60;

            secs = Math.floor(amount);//seconds

            if (days != 0) { out += days + " day" + ((days != 1) ? "s" : "") + ", "; }
            if (days != 0 || hours != 0) { out += hours + " hour" + ((hours != 1) ? "s" : "") + ", "; }
            if (days != 0 || hours != 0 || mins != 0) { out += mins + " minute" + ((mins != 1) ? "s" : "") + ", "; }
            out += secs + " seconds";
            document.getElementById('countbox').innerHTML = out;
            await sleep(1000);
        }


        //setTimeout(GetCount(dateFuture), 1000);
    }
}