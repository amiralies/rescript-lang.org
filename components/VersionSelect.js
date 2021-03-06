// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Util from "../common/Util.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function VersionSelect(Props) {
  var onChange = Props.onChange;
  var version = Props.version;
  var latestVersionLabel = Props.latestVersionLabel;
  var availableVersions = Props.availableVersions;
  var children = Belt_Array.map(availableVersions, (function (ver) {
          var label = ver === "latest" ? latestVersionLabel : ver;
          return React.createElement("option", {
                      key: ver,
                      className: "py-4",
                      value: ver
                    }, Util.ReactStuff.s(label));
        }));
  return React.createElement("select", {
              className: "text-14 border border-fire inline-block rounded px-4 py-1  font-semibold ",
              name: "versionSelection",
              value: version,
              onChange: onChange
            }, Util.ReactStuff.ate(children));
}

var make = VersionSelect;

export {
  make ,
  
}
/* react Not a pure module */
