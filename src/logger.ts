export function logMessage(_level: number, _message: string) {}
export function logToast(_level: number, _message: string) {}
export function logCatMessage(_level: LogLevel, _category: LogCategory, _message: string) {}

export enum LogCategory {
    Tokenizer = 0,
}

export enum LogLevel {
    /**
     * No messages are logged with this level.
     */
    Off = 0,

    /**
     * All messages are logged with this level.
     */
    Trace = 1,

    /**
     * Messages with debug and higher log level are logged with this level.
     */
    Debug = 2,

    /**
     * Messages with info and higher log level are logged with this level.
     */
    Info = 3,

    /**
     * Messages with warning and higher log level are logged with this level.
     */
    Warning = 4,

    /**
     * Only error messages are logged with this level.
     */
    Error = 5,
}
