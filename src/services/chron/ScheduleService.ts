
import {Service} from "@tsed/common";
import * as cron from 'node-cron';
import {Logger} from "@tsed/common";
import {Injectable, Inject} from "@tsed/di";
import {HelloWorldService} from '../HelloWorldService'
import {chron} from "../../config/env";


@Injectable()
@Service()
export class ScheduleService {

    constructor(private helloWorldService:HelloWorldService){
    }

    @Inject()
    logger: Logger;

    async setup(){
        this.logger.info('[Job] Setting up all chrons');
        // Hellow cron
        cron.schedule(chron, 
            () => {
                this.logger.info(`The chron ${this.helloWorldService.getHello()} is running`);
          });
        this.logger.info('[Job] all done');
    }

}