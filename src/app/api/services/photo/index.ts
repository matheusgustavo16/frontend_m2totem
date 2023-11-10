import { httpClient } from "..";

const url = "/photo";

export const removeBg = (imageSrc: string, bgSrc: string) =>
  httpClient.post(`${url}/removeBg`, { imageSrc, bgSrc });

export const generateQrCode = (imageSrc: string) =>
  httpClient.post(`${url}/generateQr`, { imageSrc });