/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Method } from "../services/IHttpClient";
import { useHttpClient } from "./useHttpClient";

export class ApiService {
    constructor(private httpClient: any) {}

    public async getApis(queryString?: string): Promise<any> {
        //return queryString ? await this.httpClient(`apis?${queryString}`) : await this.httpClient(`apis`);
        return {
            "value": [
                {
                "name": "echo-api",
                "title": "Echo API",
                "kind": "rest",
                "lastUpdated": "2023-12-18T18:49:11.878Z",
                "description": "A simple HTTP request/response service.",
                "lifecycleStage": "design",
                "termsOfService": {
                    "url": "https://contoso.com/terms-of-service"
                },
                "license": {
                    "name": "default",
                    "url": "https://contoso.com/license"
                },
                "externalDocumentation": [
                    {
                    "title": "Onboarding docs",
                    "description": "Learn how to onboard to the Echo API.",
                    "url": "https://docs.contoso.com"
                    }
                ],
                "contacts": [
                    {
                    "name": "Contoso support",
                    "url": "https://support.contoso.com",
                    "email": "support@contoso.com"
                    }
                ]
                }
            ],
            "nextLink": "https://..."
        }
    }

    public async getApi(id: string) {
        //return await this.httpClient(`apis/${id}`);
        return {
            "name": "echo-api",
            "title": "Echo API",
            "kind": "rest",
            "lastUpdated": "2023-12-18T18:49:11.878Z",
            "description": "A simple HTTP request/response service.",
            "lifecycleStage": "design",
            "termsOfService": {
              "url": "https://contoso.com/terms-of-service"
            },
            "license": {
              "name": "default",
              "url": "https://contoso.com/license"
            },
            "externalDocumentation": [
              {
                "title": "Onboarding docs",
                "description": "Learn how to onboard to the Echo API.",
                "url": "https://docs.contoso.com"
              }
            ],
            "contacts": [
              {
                "name": "Contoso support",
                "url": "https://support.contoso.com",
                "email": "support@contoso.com"
              }
            ]
        };
    }

    public async getVersions(apiId: string) {
        //return await this.httpClient(`apis/${apiId}/versions`);
        return {
            "value": [
              {
                "name": "2023-01-01",
                "title": "2023-01-01",
                "lifecycleStage": "design"
              }
            ],
            "nextLink": "https://..."
        };
    }

    public async getDeployments(apiId: string) {
        //return await this.httpClient(`apis/${apiId}/deployments`);
        return {
            "value": [
              {
                "name": "production",
                "title": "Production",
                "description": "Production deployment (Public Cloud)",
                "environment": "public",
                "server": {
                  "runtimeUris": [
                    "https://contoso.azure-api.net"
                  ]
                },
                "recommended": true
              }
            ],
            "nextLink": "https://microsoft.com/aiofpisa"
        };
    }

    public async getDefinitions(apiId: string, version: string) {
        //return await this.httpClient(`apis/${apiId}/versions/${version}/definitions`);
        return {
            "value": [
              {
                "name": "default",
                "title": "Default",
                "specification": {
                  "name": "openapi",
                  "version": "3.0.1"
                },
                "description": "Default API definition."
              }
            ],
            "nextLink": "https://..."
        };
    }

    public async getSpecificationLink(apiName: string, versionName: string, definitionName: string) {
        //const response = await this.httpClient(
        //    `apis/${apiName}/versions/${versionName}/definitions/${definitionName}:exportSpecification`,
        //    Method.POST
        //);
        const response = {
              "value": "https://austinleetempstorage.blob.core.windows.net/files/Echo-API.json",
              "format": "link"
          };
        return response.value;
    }
}

const httpClient = useHttpClient();
const apiService = new ApiService(httpClient);

export const useApiService = () => apiService;
