export function ok(data?: any, message?: any) {
  return {
    status: true,
    code: 200,
    message: message || "completed!",
    data,
  };
}

export function fail(code: number, message: string = "", data: object = {}) {
  return {
    status: false,
    code,
    message,
    data,
  };
}

export function failure(code: number, message: string = "") {
  return {
    status: false,
    code,
    message,
    data: null,
  };
}
