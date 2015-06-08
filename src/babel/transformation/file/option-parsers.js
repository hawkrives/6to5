import * as util from  "../../util";

export function transformerList(key, val, pipeline) {
  val = util.arrayify(val);

  if (val.indexOf("all") >= 0 || val.indexOf(true) >= 0) {
    val = Object.keys(pipeline.transformers);
  }

  return pipeline._ensureTransformerNames(key, val);
}

export function number(key, val) {
  return +val;
}

export function boolean(key, val) {
  return !!val;
}

export function booleanString(key, val) {
  return util.booleanify(val);
}

export function list(key, val) {
  return util.list(val);
}
