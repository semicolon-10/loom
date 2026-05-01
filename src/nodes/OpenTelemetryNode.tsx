import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { OpenTelemetryIcon } from "../icons/OpenTelemetryIcon.tsx";

export function OpenTelemetryNode(props: NodeProps) {
  const label = (props.data?.label as string) || "SMS";
  return <BaseNode {...props} data={{ label, icon: <OpenTelemetryIcon /> }} />;
}
