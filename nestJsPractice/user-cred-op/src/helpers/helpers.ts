export function sendResponse(statusCode: number, data: any, message: string) {
  return {
    statusCode,
    data,
    message,
  };
}

export async function resolver(promise: any) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}
