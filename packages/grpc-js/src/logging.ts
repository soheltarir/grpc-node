/*
 * Copyright 2019 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { LogVerbosity } from './constants';

let _logger: Partial<Console> = console;
let _logVerbosity: LogVerbosity = LogVerbosity.DEBUG;

export const getLogger = (): Partial<Console> => {
  return _logger;
};

export const setLogger = (logger: Partial<Console>): void => {
  _logger = logger;
};

export const setLoggerVerbosity = (verbosity: LogVerbosity): void => {
  _logVerbosity = verbosity;
};

// tslint:disable-next-line no-any
export const log = (severity: LogVerbosity, ...args: any[]): void => {
  if (severity >= _logVerbosity && typeof _logger.error === 'function') {
    _logger.error(...args);
  }
};
