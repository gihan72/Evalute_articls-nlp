import { handleSubmit } from "../src/client/js/formHandler"

import "babel-polyfill";



describe("Testing the submit functionality", () => {
    // The test() function .
    test("Testing  handleSubmit() function", () => {
          
           expect(handleSubmit).toBeDefined();
})});