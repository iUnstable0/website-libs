"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class lib_file {
    static async getFileBuffer(fileBlob) {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            const reader = new FileReader();
            reader.onload = () => {
                const buffer = Buffer.from(reader.result);
                resolve(buffer);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(fileBlob);
        });
    }
}
exports.default = lib_file;
