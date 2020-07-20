import IPFS from 'ipfs';
import OrbitDB from 'orbit-db';

export const startIPFS = () => {
  IPFS.create().then(ipfs =>
    OrbitDB.createInstance(ipfs)
  );
}