module.exports = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!/.husky/',
        '!/coverage/',
        '!/build/',
        '!/node_modules/',
        '!/public/',
        '!/public/',
        '!/.',
    ],
    moduleNameMapper: {
        "\\.(css|pcss|less|eot|otf|ttf|woff|woff2|jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    globals: {
        "APP_MODE": 'development'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    coverageDirectory: 'coverage',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules"
    ],
};
