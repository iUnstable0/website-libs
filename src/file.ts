export default class lib_file {
  public static async getFileBuffer(fileBlob: Blob): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      const reader = new FileReader();

      reader.onload = () => {
        const buffer = Buffer.from(reader.result as ArrayBuffer);

        resolve(buffer);
      };

      reader.onerror = (error: any) => {
        reject(error);
      };

      reader.readAsArrayBuffer(fileBlob);
    });
  }
}
