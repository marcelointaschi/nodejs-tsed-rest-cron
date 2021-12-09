import {Controller, Get} from "@tsed/common";
import {HelloWorldService} from '../services/HelloWorldService'
import {$log} from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {

  constructor(private helloWorldService:HelloWorldService){
  }

  @Get("/")
  get() {
    $log.info('New request to hello controller')
    return this.helloWorldService.getHello();
  }
}
