    // src/types/custom.d.ts
    declare namespace Express {
      interface Request {
        userId?: string;

        // Add other custom properties here
      }
    }