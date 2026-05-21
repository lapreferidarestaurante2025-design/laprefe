// Mock/Simulated Firebase helper for static offline/GitHub environments
export const db = {} as any;
export const auth = {
  currentUser: null
} as any;

export const loginWithGoogle = async () => {
  return {
    uid: 'local-admin',
    email: 'lapreferidarestaurante2025@gmail.com',
    displayName: 'Administrador La Preferida',
    emailVerified: true
  };
};

export const logoutAdmin = async () => {
  return true;
};

export async function testFirestoreConnection() {
  console.log("Using modern Local Database driver. Sincronización offline activa.");
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  throw new Error(`Firestore offline mode error placeholder: ${error}`);
}
