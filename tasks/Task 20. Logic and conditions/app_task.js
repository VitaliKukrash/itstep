let day, hour;

day = 6;

hour = 38;

if (day >= 1 && day <= 6 && hour >= 8 && hour <= 16 ) {
    console.log("Ваш заказ будет доставлен сегодня после 16");
} else if (day >= 1 && day <= 6 && hour >= 16 && hour <= 23) {
    console.log("Ваш заказ будет доставлен завтр в с 8 до 16");
} else if (day >= 6 && day <= 7 && hour >= 16 && hour <= 23 || day == 7) {
    console.log("Ваш заказ будет доставлен в понедельник с 8 до 16");
} else {
    console.log("Ваш заказ не будет доставлен никогда");
}