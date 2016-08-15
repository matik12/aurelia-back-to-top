import { FrameworkConfiguration, Aurelia } from 'aurelia-framework';
import { configure } from '../../src/aurelia-back-to-top';

describe('the aurelia back to top plugin configuration', () => {
  var configuration;

  beforeEach(() => {
    configuration = new FrameworkConfiguration(new Aurelia());
    
    configure(configuration);
  });

  it('should register back to top custom element', () => {
    // TODO: Should check that custom element is registered and available!
    expect(true).toBeDefined();
  });
});
