const noflo = require('noflo');

exports.getComponent = () => {
  const c = new noflo.Component();
  c.description = 't';
  c.icon = 'cog';
  c.inPorts.add('in', {
    datatype: 'all',
    description: 'Packet to forward'
  });
  c.outPorts.add('out', {
    datatype: 'all'
  });
  c.process((input, output) => {
    // Check preconditions on input data
    if (!input.hasData('in')) {
      return;
    }
    // Read packets we need to process
    const data = input.getData('in');
    console.log(">> " + data);
    // Process data and send output
    output.send({
      out: data
    });
    // Deactivate
    output.done();
  });
  return c;
};
