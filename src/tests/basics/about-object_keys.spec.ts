const statusShipmentImport = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "RUNNING",
} as const;
type TShipmentImport = typeof statusShipmentImport;

export const typedKeys = <T extends object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>;
};

const createOptionsFilter = (status: TShipmentImport) => {
  const options = typedKeys(status).map((key) => ({
    id: key,
    label: `batch.tracking.status.${statusShipmentImport[key]}`,

    value: statusShipmentImport[key],
  }));

  return options;
};

describe("about Object.keys", () => {
  it("should infer the right types", () => {
    const result = [
      {
        id: "COMPLETE",
        label: `batch.tracking.status.COMPLETE`,

        value: "COMPLETE",
      },
      {
        id: "FAILED",
        label: `batch.tracking.status.FAILED`,

        value: "FAILED",
      },
      {
        id: "IN_PROGRESS",
        label: `batch.tracking.status.RUNNING`,

        value: "RUNNING",
      },
    ];
    expect(createOptionsFilter(statusShipmentImport)).toEqual(result);
  });
});
