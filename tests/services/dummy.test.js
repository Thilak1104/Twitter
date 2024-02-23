import { execute } from "../../src/services/dummy-service";
import { helper } from "../../src/services/helper-service";

jest.mock('../../src/services/helper-service.js');

test('result is true and returns Learning JS', () => {
    // impl of test
    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Learning JS');
});

test('result is false and returns Learning ReactJS', () => {
    // impl of test
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Learning ReactJS');
});
