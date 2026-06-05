import { defineQuery, defineHook, type OnSetDoc } from "@junobuild/functions";
import { j } from "@junobuild/schema";
import { canisterSelf } from "@junobuild/functions/ic-cdk";

const Schema = j.strictObject({
  id: j.principal(),
});

export const onSetDoc = defineHook<OnSetDoc>({
  collections: ["demo"],
  run: async (context) => {
    console.log(context)
  }});

export const helloWorld = defineQuery({
  result: Schema,
  handler: async () => {
    return {
      id: canisterSelf()
    }
  },
});
