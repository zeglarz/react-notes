export default function () {
    const currentdate = new Date();
    return (
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear() +
        ' @ ' +
        (currentdate.getHours() < 10
            ? '0' + currentdate.getHours()
            : currentdate.getHours()) +
        ':' +
        (currentdate.getMinutes() < 10
            ? '0' + currentdate.getMinutes()
            : currentdate.getMinutes()) +
        ':' +
        (currentdate.getSeconds() < 10
            ? '0' + currentdate.getSeconds()
            : currentdate.getSeconds())
    );
}
