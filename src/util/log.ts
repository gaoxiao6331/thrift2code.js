import chalk from 'chalk'
import dayjs from 'dayjs'

export interface Logger {
    info(msg: string): void
    warn(msg: string): void
    error(msg: string): void
}

export class DefaultLogger implements Logger {

   private current() {
       return dayjs().format('YYYY-MM-DD HH:mm:ss')
   }


    info(msg: string) {
        console.log(chalk.blue(`[${this.current()}] [info] ${msg}`))
    }

    error(msg: string): void {
        console.log(chalk.red(`[${this.current()}] [error] ${msg}`))
    }

    warn(msg: string): void {
        console.log(chalk.yellow(`[${this.current()}] [warn] ${msg}`))
    }
}

export const defaultLogger = new DefaultLogger()