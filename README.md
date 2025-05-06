### Start Project

1. Create JWT_KEY environment variable by running: kubectl create secret generic jwt-secret --from-literal=JWT_KEY=yoursecret
2. Run `skaffold dev` in the folder containing skaffold.yaml file