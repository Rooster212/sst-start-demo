import MySampleStack from "./MySampleStack";

export default function main(app) {
  await new Promise(() => setTimeout(10000))
  new MySampleStack(app, "sample", { stackName: 'jr-test-cdk-sst'});
}
