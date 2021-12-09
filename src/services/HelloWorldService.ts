import {Service} from "@tsed/common";

@Service()
export class HelloWorldService {
  
   getHello(): string {
    return 'hello';
  }
}
