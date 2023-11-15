const JSResponse = await fetch('https://cdn.jsdelivr.net/jsbarcode/3.6.0/JsBarcode.all.min.js');
const JSResult = await JSResponse.text();
const JSModule = await import(JSResult);

const JSONResponse = await fetch('settings.json');
const JSONResult = await JSONResponse.json();
const JSONModule = await import(JSONResult);

const JSONFetch = async (Input = '') => {
    const Response = await fetch(Input);
    const Result = await Response.json();
    return Result;
};

export const MyFunction = async () => {
    const Result = await JSONFetch ('settings.json');
};