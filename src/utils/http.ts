interface RequestOptions extends RequestInit {
  timeout?: number;
}

interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

class HttpError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data: any
  ) {
    super(`${status} ${statusText}`);
    this.name = 'HttpError';
  }
}

export class HttpClient {
  private static instance: HttpClient;
  private baseURL: string;
  private defaultOptions: RequestOptions;

  private constructor(baseURL: string = '') {
    this.baseURL = baseURL;
    this.defaultOptions = {
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  public static getInstance(baseURL?: string): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient(baseURL);
    }
    return HttpClient.instance;
  }

  private async request<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<HttpResponse<T>> {
    const finalOptions = {
      ...this.defaultOptions,
      ...options,
      headers: {
        ...this.defaultOptions.headers,
        ...options.headers,
      },
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), finalOptions.timeout);

    try {
      const response = await fetch(this.baseURL + url, {
        ...finalOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        throw new HttpError(response.status, response.statusText, data);
      }

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof HttpError) {
        throw error;
      }
      throw new HttpError(0, 'Network Error', error);
    }
  }

  public async get<T>(url: string, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>(url, { ...options, method: 'GET' });
  }

  public async post<T>(url: string, data?: any, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  public async put<T>(url: string, data?: any, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  public async delete<T>(url: string, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }
} 