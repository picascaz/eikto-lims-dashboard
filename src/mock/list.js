import { faker } from "@faker-js/faker";

export const generateBatterySampleList = (count = 100) => {
  const sampleTypes = ["液体", "固体", "气体"];
  const priorityLevels = ["高", "中", "低"];
  const experimentItems = [
    "电池容量测试",
    "电池寿命分析",
    "电池材料成分分析",
    "电解液成分分析",
    "电极材料检测",
    "充放电性能测试",
    "安全性能测试",
  ];
  const experimentalMethods = [
    "ICP-OES",
    "XRD",
    "SEM",
    "电化学测试",
    "气相色谱",
    "液相色谱",
  ];
  const expectedResultFormats = ["Excel表格", "PDF报告", "CSV文件"];

  return Array.from({ length: count }, (_, index) => ({
    sampleID: `S${String(faker.number.octal())}${String(
      faker.number.octal()
    )}${String(faker.number.octal())}${String(faker.number.octal())}`,
    sampleName: faker.helpers.arrayElement([
      "电解液",
      "电极材料",
      "电池单体",
      "隔膜",
    ]),
    sampleType: sampleTypes[Math.floor(Math.random() * sampleTypes.length)],
    sampleDescription: "采自农田",
    samplingDate: "2024-01-01",
    sampleQuantity: `${faker.number.int({
      min: 10,
      max: 1000,
    })}${faker.helpers.arrayElement(["ml", "g", "个"])}`,
    sampleCondition: faker.helpers.arrayElement([
      "冷藏",
      "干燥",
      "常温",
      "冷冻",
    ]),
    storageConditions: "常温",
    submitterName: faker.company.name(),
    submitterContact: "138########",
    submittingOrganization: faker.company.name(),
    mailingAddress: "某某研究所",
    experimentItems: faker.helpers.arrayElements(
      experimentItems,
      faker.number.int({ min: 1, max: 1 })
    ),
    experimentalMethods: faker.helpers.arrayElements(
      experimentalMethods,
      faker.number.int({ min: 1, max: 2 })
    ),
    specialRequirements: "检测有机污染物",
    priorityLevel:
      priorityLevels[Math.floor(Math.random() * priorityLevels.length)],
    deadline: faker.date.future().toISOString().split("T")[0],
    samplePretreatment: "研磨后测定",
    expectedAnalysisItems: "有机物含量",
    expectedResultFormat:
      expectedResultFormats[
        Math.floor(Math.random() * expectedResultFormats.length)
      ],
    dataReportingRequirements: "电子版和纸质版",
    safetyInformation: "无特殊要求",
    hazardousMaterialDescription: faker.lorem.sentence(),
    complianceStatement: faker.lorem.sentence(),
    remarks: faker.lorem.sentence(),
    attachedFiles: faker.lorem.words(),
  }));
};

export const generateRandomHistoryList = (length = 100) => {
  return Array.from({ length }, () => ({
    day: faker.number.int({ min: 1, max: 100 }),
    dayTotal: faker.number.int({ min: 1, max: 100 }),
    toDay: faker.number.int({ min: 100, max: 500 }),
    toDayTotal: faker.number.int({ min: 500, max: 1000 }),
    percent: faker.number.int({ min: -100, max: 100 }),
  }));
};

export const generateFormattedNumberArray = () => {
  const formatter = new Intl.NumberFormat("en-US");

  let num1 = faker.number.int({ min: 1, max: 100 });
  let num2 = faker.number.int({ min: 1, max: num1 });
  let num3 = faker.number.int({ min: 100, max: 4000 });
  let num4 = faker.number.int({ min: num3, max: 100000 });

  const numbers = [num1, num2, num4 - num3, num4];

  return numbers.map((num) => formatter.format(num).replace(/,/g, ","));
};

export const generateRandomNumberArray = () => {
  return Array.from({ length: 4 }, () =>
    faker.number.int({ min: 1, max: 100 })
  );
};

export const cnasLabRequirements = [
  {
    name: "组织结构",
    description:
      "确保实验室有明确的组织结构和责任分配，以保证管理的有效性和操作的规范性",
  },
  {
    name: "质量管理体系",
    description:
      "建立并维持一个符合国际标准的质量管理体系，确保检测和校准活动的质量",
  },
  {
    name: "文件控制",
    description: "确保所有相关文件的正确性和最新性，避免使用过时或无效的文件",
  },
  {
    name: "记录控制",
    description: "保证所有记录的准确性、完整性和可追溯性，方便日后查询和审核",
  },
  {
    name: "人员管理",
    description: "确保所有参与检测和校准的人员具有必要的资格、培训和经验",
  },
  {
    name: "设施和环境条件",
    description:
      "提供和维护适合的设施和环境条件，以确保检测和校准的准确性和可靠性",
  },
  {
    name: "设备管理",
    description:
      "保证所有设备的正确使用、维护和校准，以确保其正常运行和测量的准确性",
  },
  {
    name: "检测和校准方法",
    description: "使用经过验证的检测和校准方法，确保结果的准确性和可重复性",
  },
  {
    name: "结果报告",
    description: "提供清晰、准确和详尽的检测和校准结果报告，以便客户理解和使用",
  },
  {
    name: "样品管理",
    description: "确保样品在接收、处理、存储和处置过程中的完整性和正确性",
  },
  {
    name: "内部审核",
    description: "定期进行内部审核，以评估和改进质量管理体系的有效性",
  },
  {
    name: "管理评审",
    description:
      "定期进行管理评审，以确保质量管理体系的持续适用性、充分性和有效性",
  },
  {
    name: "不符合项管理",
    description: "及时识别和处理不符合项，采取纠正和预防措施，防止问题再次发生",
  },
  {
    name: "客户投诉处理",
    description: "建立有效的客户投诉处理机制，及时解决客户反馈的问题和意见",
  },
  {
    name: "纠纷处理",
    description:
      "制定并实施纠纷处理程序，公平、公正地解决与客户或其他相关方的争议",
  },
  {
    name: "组织结构",
    description:
      "确保实验室有明确的组织结构和责任分配，以保证管理的有效性和操作的规范性",
  },
  {
    name: "质量管理体系",
    description:
      "建立并维持一个符合国际标准的质量管理体系，确保检测和校准活动的质量",
  },
  {
    name: "文件控制",
    description: "确保所有相关文件的正确性和最新性，避免使用过时或无效的文件",
  },
  {
    name: "记录控制",
    description: "保证所有记录的准确性、完整性和可追溯性，方便日后查询和审核",
  },
  {
    name: "人员管理",
    description: "确保所有参与检测和校准的人员具有必要的资格、培训和经验",
  },
  {
    name: "设施和环境条件",
    description:
      "提供和维护适合的设施和环境条件，以确保检测和校准的准确性和可靠性",
  },
  {
    name: "设备管理",
    description:
      "保证所有设备的正确使用、维护和校准，以确保其正常运行和测量的准确性",
  },
  {
    name: "检测和校准方法",
    description: "使用经过验证的检测和校准方法，确保结果的准确性和可重复性",
  },
  {
    name: "结果报告",
    description: "提供清晰、准确和详尽的检测和校准结果报告，以便客户理解和使用",
  },
  {
    name: "样品管理",
    description: "确保样品在接收、处理、存储和处置过程中的完整性和正确性",
  },
  {
    name: "内部审核",
    description: "定期进行内部审核，以评估和改进质量管理体系的有效性",
  },
  {
    name: "管理评审",
    description:
      "定期进行管理评审，以确保质量管理体系的持续适用性、充分性和有效性",
  },
  {
    name: "不符合项管理",
    description: "及时识别和处理不符合项，采取纠正和预防措施，防止问题再次发生",
  },
  {
    name: "客户投诉处理",
    description: "建立有效的客户投诉处理机制，及时解决客户反馈的问题和意见",
  },
  {
    name: "纠纷处理",
    description:
      "制定并实施纠纷处理程序，公平、公正地解决与客户或其他相关方的争议",
  },
];
