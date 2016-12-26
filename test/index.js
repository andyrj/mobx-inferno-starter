var requireTest = require.context('./units', true, /\.(js|jsx)$/);
requireTest.keys().forEach(requireTest);
