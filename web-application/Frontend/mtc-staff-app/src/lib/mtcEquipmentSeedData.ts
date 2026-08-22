// MTC Church Assets seeded from ระบบทรัพย์สินMTC_05_2021.xlsx (Total 215 items)

export interface MockEquipment {
  id: string;
  name: string;
  type: string;
  serialNumber: string | null;
  location: string | null;
  qrCode: string;
  status: string;
  notes: string | null;
  imageUrl?: string | null;
}

export const MOCK_EXCEL_EQUIPMENTS: MockEquipment[] = [
  {
    "id": "eq-2100003",
    "name": "[2100003] Camera DataVideo PTZ-140",
    "type": "Camera",
    "serialNumber": "PTZ-140",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100003",
    "status": "borrowed",
    "notes": "แบบติดตรึง - ติดตั้ั้งนมัสการล่าง"
  },
  {
    "id": "eq-2100004",
    "name": "[2100004] Camera DataVideo PTZ-140",
    "type": "Camera",
    "serialNumber": "PTZ-140",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100004",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งห้องนมัสการภาคบ่าย"
  },
  {
    "id": "eq-2100005",
    "name": "[2100005] Camera DataVideo PTZ-140",
    "type": "Camera",
    "serialNumber": "PTZ-140",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100005",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งห้องนมัสการล่าง"
  },
  {
    "id": "eq-2100006",
    "name": "[2100006] Camera Control DataVideo RMC-180",
    "type": "Camera",
    "serialNumber": "RMC-180",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100006",
    "status": "available",
    "notes": "แบบลอยตัว - วางบนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100007",
    "name": "[2100007] Video Hub BlackMagic Smart-VideoHub 12x12",
    "type": "Other",
    "serialNumber": "Smart-VideoHub 12x12",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100007",
    "status": "available",
    "notes": "แบบติดตรึง - อยู่ในตู้Rack ใต้โต๊ะ ควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100008",
    "name": "[2100008] Video Converter BlackMagic Audio To SDI",
    "type": "SoundSystem",
    "serialNumber": "Audio To SDI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100008",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้Rack ใต้โต๊ะ ควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100009",
    "name": "[2100009] SDI Splitter BlackMagic SDI Distribution",
    "type": "Other",
    "serialNumber": "SDI Distribution",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100009",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้Rack ใต้โต๊ะ ควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100010",
    "name": "[2100010] SDI Splitter BlackMagic SDI Distribution",
    "type": "Other",
    "serialNumber": "SDI Distribution",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100010",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้Rack ใต้โต๊ะ ควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100011",
    "name": "[2100011] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100011",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนตัวProjecterฝั่งเปียโน"
  },
  {
    "id": "eq-2100012",
    "name": "[2100012] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100012",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนตัวProjecterฝั่งห้องนมัสการรอง"
  },
  {
    "id": "eq-2100013",
    "name": "[2100013] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100013",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนตัว TV ฝั่งเปียโน"
  },
  {
    "id": "eq-2100014",
    "name": "[2100014] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100014",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนตัว TV ฝั่งห้องนมัสการรอง"
  },
  {
    "id": "eq-2100015",
    "name": "[2100015] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100015",
    "status": "available",
    "notes": "แบบลอยตัว - ช่องเก็บสายตรงกลาง บนพื้นเวทีธรรมมาส"
  },
  {
    "id": "eq-2100016",
    "name": "[2100016] Video Converter BlackMagic HDMI To SDI",
    "type": "Other",
    "serialNumber": "HDMI To SDI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100016",
    "status": "available",
    "notes": "แบบลอยตัว - หลังคอมฯ LIVE ใต้โต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100017",
    "name": "[2100017] Video Converter BlackMagic HDMI To SDI",
    "type": "Other",
    "serialNumber": "HDMI To SDI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100017",
    "status": "available",
    "notes": "แบบลอยตัว - หลังคอมฯ Power Point ใต้โต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100018",
    "name": "[2100018] Video Converter BlackMagic HDMI To SDI",
    "type": "Other",
    "serialNumber": "HDMI To SDI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100018",
    "status": "available",
    "notes": "แบบลอยตัว - ช่องเก็บสายตรงกลาง บนพื้นเวทีธรรมมาส"
  },
  {
    "id": "eq-2100019",
    "name": "[2100019] TV Monitoring LG 42LY340C",
    "type": "Projector",
    "serialNumber": "42LY340C",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100019",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งทางเดินฝั่งเปียโน"
  },
  {
    "id": "eq-2100020",
    "name": "[2100020] TV Monitoring LG 42LY340C",
    "type": "Projector",
    "serialNumber": "42LY340C",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100020",
    "status": "available",
    "notes": "แบบติดตรึง - ติิดตั้งทางเดินฝั่งห้องนมัสการรอง"
  },
  {
    "id": "eq-2100021",
    "name": "[2100021] Display Monitoring Dell 21\"",
    "type": "Projector",
    "serialNumber": "21\"",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100021",
    "status": "available",
    "notes": "แบบติดตรึง - บนโต๊ะธรรมมาส"
  },
  {
    "id": "eq-2100023",
    "name": "[2100023] Display Monitoring ASUS 21\"",
    "type": "Projector",
    "serialNumber": "21\"",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100023",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้คู่กับคอมฯ LIVE อยู่บนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100024",
    "name": "[2100024] Display Monitoring SVOA ViewSonic VG1655 15.6\"",
    "type": "Projector",
    "serialNumber": "ViewSonic VG1655 15.6\"",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100024",
    "status": "available",
    "notes": "แบบลอยตัว - มอนิเตอร์สำหรับผู้นำ นั่งรอ ฝั่งเปียโน"
  },
  {
    "id": "eq-2100025",
    "name": "[2100025] Display Monitoring SVOA ViewSonic VG1655 15.6\"",
    "type": "Projector",
    "serialNumber": "ViewSonic VG1655 15.6\"",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100025",
    "status": "available",
    "notes": "แบบลอยตัว - มอนิเตอร์สำหรับผู้นำ นั่งรอ ฝั่งห้องนมัสการรอง"
  },
  {
    "id": "eq-2100026",
    "name": "[2100026] Computer ประกอบ",
    "type": "Other",
    "serialNumber": "2100026",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100026",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้สำหรับการทำ Streaming"
  },
  {
    "id": "eq-2100027",
    "name": "[2100027] คอมพิวเตอร์ All-in-one HP 21-b0707in",
    "type": "Other",
    "serialNumber": "21-b0707in",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100027",
    "status": "maintenance",
    "notes": "แบบลอยตัว - ใช้สำหรับการเปิด PPT หรือ Clip Video"
  },
  {
    "id": "eq-2100028",
    "name": "[2100028] Splitter GLINK HDMI Spliter เข้า 1 ออก 2",
    "type": "Other",
    "serialNumber": "เข้า 1 ออก 2",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100028",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้คู่กับคอมฯ PPT อยู่บนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100029",
    "name": "[2100029] Splitter UGREEN เข้า 1 ออก 4",
    "type": "Other",
    "serialNumber": "เข้า 1 ออก 4",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100029",
    "status": "available",
    "notes": "แบบลอยตัว - ช่องเก็บสายตรงกลาง บนพื้นเวทีธรรมมาส"
  },
  {
    "id": "eq-2100030",
    "name": "[2100030] ขาแขวน TV",
    "type": "Projector",
    "serialNumber": "2100030",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100030",
    "status": "available",
    "notes": "แบบติดตรึง - ใช้แขวน TV ฝั่งเปียโน"
  },
  {
    "id": "eq-2100031",
    "name": "[2100031] ขาแขวน TV",
    "type": "Projector",
    "serialNumber": "2100031",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100031",
    "status": "available",
    "notes": "แบบติดตรึง - ใช้แขวน TV ฝั่งห้องนมัสการรอง"
  },
  {
    "id": "eq-2100032",
    "name": "[2100032] Projector Panasonic PT-VW540A",
    "type": "Projector",
    "serialNumber": "PT-VW540A",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการรอง",
    "qrCode": "MTC-EQ-2100032",
    "status": "maintenance",
    "notes": "แบบติดตรึง - แขวนอยู่กลางห้องนมัสการรอง"
  },
  {
    "id": "eq-2100033",
    "name": "[2100033] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการรอง",
    "qrCode": "MTC-EQ-2100033",
    "status": "available",
    "notes": "แบบติดตรึง - บนตัว Projector"
  },
  {
    "id": "eq-2100034",
    "name": "[2100034] Camera Panasonic 3CCD P2HD",
    "type": "Camera",
    "serialNumber": "3CCD P2HD",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100034",
    "status": "borrowed",
    "notes": "แบบลอยตัว - ฝั่งขวาใกล้ระบบควบคุมแอร์"
  },
  {
    "id": "eq-2100035",
    "name": "[2100035] Camera Panasonic 3CCD P2HD",
    "type": "Camera",
    "serialNumber": "3CCD P2HD",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100035",
    "status": "available",
    "notes": "แบบลอยตัว - หลังห้องใกล้โต๊ะควบคุมภาพ-เสียง"
  },
  {
    "id": "eq-2100036",
    "name": "[2100036] Adapter Panasonic DE-A20",
    "type": "Other",
    "serialNumber": "DE-A20",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100036",
    "status": "available",
    "notes": "แบบลอยตัว - จ่ายไฟให้กล้องฝั่งขวาใกล้ระบบควบคุมแอร์"
  },
  {
    "id": "eq-2100037",
    "name": "[2100037] Adapter Panasonic DE-A20",
    "type": "Other",
    "serialNumber": "DE-A20",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100037",
    "status": "available",
    "notes": "แบบลอยตัว - จ่ายไฟให้กล้องหลังห้องใกล้โต๊ะควบคุมภาพ-เสียง"
  },
  {
    "id": "eq-2100038",
    "name": "[2100038] ขาตั้งกล้องวิดิโอ",
    "type": "Camera",
    "serialNumber": "2100038",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100038",
    "status": "available",
    "notes": "แบบลอยตัว - ตั้งกล้องฝั่งขวาใกล้ระบบควบคุมแอร์"
  },
  {
    "id": "eq-2100039",
    "name": "[2100039] ขาตั้งกล้องวิดิโอ",
    "type": "Camera",
    "serialNumber": "2100039",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100039",
    "status": "available",
    "notes": "แบบลอยตัว - ตั้งกล้องหลังห้องใกล้โต๊ะควบคุมภาพ-เสียง"
  },
  {
    "id": "eq-2100040",
    "name": "[2100040] สำรองไฟ (UPS) APC 1400VA",
    "type": "Other",
    "serialNumber": "1400VA",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100040",
    "status": "available",
    "notes": "แบบลอยตัว - สำรองไฟให้ Mixer อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100041",
    "name": "[2100041] สำรองไฟ (UPS) APC 1100VA",
    "type": "Other",
    "serialNumber": "1100VA",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100041",
    "status": "available",
    "notes": "แบบลอยตัว - สำรองไฟให้ Mixer อยู่บนโต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100042",
    "name": "[2100042] สำรองไฟ (UPS) APC 800VA",
    "type": "Other",
    "serialNumber": "800VA",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100042",
    "status": "available",
    "notes": "แบบลอยตัว - สำรองไฟให้ คอมLive อยู่ใต้โต๊ะควบคุมภาพ-เสียง"
  },
  {
    "id": "eq-2100043",
    "name": "[2100043] สำรองไฟ (UPS) APC 800VA",
    "type": "Other",
    "serialNumber": "800VA",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100043",
    "status": "available",
    "notes": "แบบลอยตัว - สำรองไฟให้ คอมLive อยู่บนโต๊ะควบคุมภาพ-เสียง"
  },
  {
    "id": "eq-2100044",
    "name": "[2100044] สำรองไฟ (UPS) APC 800VA",
    "type": "Other",
    "serialNumber": "800VA",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100044",
    "status": "available",
    "notes": "แบบลอยตัว - สำรองไฟให้ Mixer อยู่ในตู้ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100046",
    "name": "[2100046] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100046",
    "status": "available",
    "notes": "แบบติดตรึง - วางอยู่บน Projector"
  },
  {
    "id": "eq-2100047",
    "name": "[2100047] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100047",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100048",
    "name": "[2100048] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100048",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100049",
    "name": "[2100049] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100049",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100050",
    "name": "[2100050] VisualSystem BlackMagic HDMI To SDI",
    "type": "Other",
    "serialNumber": "HDMI To SDI",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100050",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100051",
    "name": "[2100051] Video Converter BlackMagic HDMI To SDI",
    "type": "Other",
    "serialNumber": "HDMI To SDI",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100051",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100052",
    "name": "[2100052] Video Converter BlackMagic HDMI To SDI",
    "type": "Other",
    "serialNumber": "HDMI To SDI",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100052",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100053",
    "name": "[2100053] Video Converter HDMI Audio Extractor",
    "type": "SoundSystem",
    "serialNumber": "HDMI Audio Extractor",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100053",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100054",
    "name": "[2100054] TV Monitoring Samsung UA65NU7400",
    "type": "Projector",
    "serialNumber": "UA65NU7400",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100054",
    "status": "available",
    "notes": "แบบติดตรึง - แขวนอยูู่่หลังห้องใกล้โต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100055",
    "name": "[2100055] คอมพิวเตอร์ Notebook Acer 14\"",
    "type": "Other",
    "serialNumber": "14\"",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100055",
    "status": "available",
    "notes": "แบบลอยตัว - วางบนโต๊ะหลังห้องใกล้โต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100056",
    "name": "[2100056] Computer ประกอบ",
    "type": "Other",
    "serialNumber": "2100056",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100056",
    "status": "available",
    "notes": "แบบลอยตัว - คอมฯLIVE บนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100057",
    "name": "[2100057] Display Monitoring Viewsonic 21\"",
    "type": "Projector",
    "serialNumber": "21\"",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100057",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้คู่กับคอมฯLIVE บนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100058",
    "name": "[2100058] Projector Panasonic PT VW545N",
    "type": "Projector",
    "serialNumber": "PT VW545N",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100058",
    "status": "available",
    "notes": "แบบติดตรึง - แขวนอยู่กลางห้อง"
  },
  {
    "id": "eq-2100059",
    "name": "[2100059] จอรับภาพ Projector",
    "type": "Projector",
    "serialNumber": "2100059",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2100059",
    "status": "available",
    "notes": "แบบติดตรึง - แขวนอยู่ผนังหน้าห้อง"
  },
  {
    "id": "eq-2100060",
    "name": "[2100060] Switcher UGREEN HDMI Matrix 4x2",
    "type": "Other",
    "serialNumber": "HDMI Matrix 4x2",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2100060",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2100062",
    "name": "[2100062] SDI Splitter BlackMagic SDI Distribution",
    "type": "Other",
    "serialNumber": "SDI Distribution",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100062",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100063",
    "name": "[2100063] SDI Splitter BlackMagic SDI Distribution",
    "type": "Other",
    "serialNumber": "SDI Distribution",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100063",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100064",
    "name": "[2100064] ขาตั้งกล้องวิดิโอ",
    "type": "Camera",
    "serialNumber": "2100064",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100064",
    "status": "available",
    "notes": "แบบลอยตัว - ตั้งอยู่หลังห้อง ใกล้โต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100065",
    "name": "[2100065] Camera Panasonic 3CCD P2HD",
    "type": "Camera",
    "serialNumber": "3CCD P2HD",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100065",
    "status": "available",
    "notes": "แบบลอยตัว - ติดตั้งบนขาตั้งกล้อง Video"
  },
  {
    "id": "eq-2100066",
    "name": "[2100066] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100066",
    "status": "available",
    "notes": "แบบติดตรึง - วางบนProjectorกลางห้อง"
  },
  {
    "id": "eq-2100067",
    "name": "[2100067] Computer ประกอบ",
    "type": "Other",
    "serialNumber": "2100067",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100067",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้เป็น LIVE ตั้งบนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100068",
    "name": "[2100068] คอมพิวเตอร์ Notebook MSI GP TCM 7Rex",
    "type": "Other",
    "serialNumber": "GP TCM 7Rex",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100068",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้เปิด PPT ตั้งบนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100069",
    "name": "[2100069] Display Monitoring ACER 21\"",
    "type": "Projector",
    "serialNumber": "21\"",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100069",
    "status": "available",
    "notes": "แบบลอยตัว - อยูู่่บนโต๊ะควบคุมระบบภาพ-เสียง ใช้คู่กับคอมLIVE"
  },
  {
    "id": "eq-2100070",
    "name": "[2100070] TV Monitoring Samsung UA65NU7400",
    "type": "Projector",
    "serialNumber": "UA65NU7400",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100070",
    "status": "available",
    "notes": "แบบติดตรึง - ยึดกับผนังหลังห้อง"
  },
  {
    "id": "eq-2100071",
    "name": "[2100071] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100071",
    "status": "available",
    "notes": "แบบติดตรึง - อยู่ข้างหลัง TV Monitor ผนังหลังห้อง"
  },
  {
    "id": "eq-2100072",
    "name": "[2100072] ขาแขวน TV",
    "type": "Projector",
    "serialNumber": "2100072",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100072",
    "status": "available",
    "notes": "แบบติดตรึง - ยึดTV Monitor เข้ากับผนังหลังห้อง"
  },
  {
    "id": "eq-2100073",
    "name": "[2100073] จอรับภาพ Projector",
    "type": "Projector",
    "serialNumber": "2100073",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100073",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้ั้งหน้าเวที"
  },
  {
    "id": "eq-2100074",
    "name": "[2100074] Switcher Karmer VS-42H2 4x2 4K",
    "type": "Other",
    "serialNumber": "VS-42H2 4x2 4K",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100074",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้ใต้โต๊ะควบคุม ภาพ-เสียง"
  },
  {
    "id": "eq-2100075",
    "name": "[2100075] Adapter Panasonic DE-A20",
    "type": "Other",
    "serialNumber": "DE-A20",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2100075",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้คู่กับกล้อง Video หลังห้อง"
  },
  {
    "id": "eq-2100076",
    "name": "[2100076] Projector Epson EB-2255U",
    "type": "Projector",
    "serialNumber": "EB-2255U",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100076",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งกับขายึดบนเพดาน"
  },
  {
    "id": "eq-2100077",
    "name": "[2100077] ขายึด Projector Vertex LGH-06",
    "type": "Projector",
    "serialNumber": "LGH-06",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100077",
    "status": "available",
    "notes": "แบบติดตรึง - ขายึด Projector กับเพดาน"
  },
  {
    "id": "eq-2100078",
    "name": "[2100078] TV Monitoring Samsung UA55TU8000",
    "type": "Projector",
    "serialNumber": "UA55TU8000",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100078",
    "status": "available",
    "notes": "แบบติดตรึง - ยึดTV Monitor เข้ากับผนังหลังห้อง"
  },
  {
    "id": "eq-2100079",
    "name": "[2100079] ขาแขวน TV",
    "type": "Projector",
    "serialNumber": "2100079",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100079",
    "status": "available",
    "notes": "แบบติดตรึง - ยึดTV Monitor เข้ากับผนังหลังห้อง ยืดหด ได้"
  },
  {
    "id": "eq-2100080",
    "name": "[2100080] Switcher UGREEN HDMI Matrix 4x2",
    "type": "Other",
    "serialNumber": "HDMI Matrix 4x2",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100080",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้อุปกรณ์ ควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100081",
    "name": "[2100081] HDMI Repeater",
    "type": "Other",
    "serialNumber": "2100081",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100081",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้อุปกรณ์ ควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100082",
    "name": "[2100082] Projector Panasonic PT-VW530",
    "type": "Projector",
    "serialNumber": "PT-VW530",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100082",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งฝั่งเปียโน"
  },
  {
    "id": "eq-2100083",
    "name": "[2100083] Projector Panasonic PT-VW530",
    "type": "Projector",
    "serialNumber": "PT-VW530",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100083",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งฝั่ั่งห้องน้ำ"
  },
  {
    "id": "eq-2100085",
    "name": "[2100085] จอรับภาพ Projector",
    "type": "Projector",
    "serialNumber": "2100085",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100085",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งฝั่งเปียโน"
  },
  {
    "id": "eq-2100086",
    "name": "[2100086] จอรับภาพ Projector",
    "type": "Projector",
    "serialNumber": "2100086",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100086",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งฝั่ั่งห้องน้ำ"
  },
  {
    "id": "eq-2100087",
    "name": "[2100087] จอรับภาพ Projector",
    "type": "Projector",
    "serialNumber": "2100087",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100087",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งตรงกลางห้อง"
  },
  {
    "id": "eq-2100088",
    "name": "[2100088] Switcher VGA Switcher",
    "type": "Other",
    "serialNumber": "VGA Switcher",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100088",
    "status": "available",
    "notes": "เข้า 2 ออก1 ติดตั้งที่หน้าเวที ฝั่งห้องน้ำ"
  },
  {
    "id": "eq-2100089",
    "name": "[2100089] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100089",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนProjectorฝั่งเปียโน"
  },
  {
    "id": "eq-2100090",
    "name": "[2100090] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100090",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนProjectorฝั่ั่งห้องน้ำ"
  },
  {
    "id": "eq-2100091",
    "name": "[2100091] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100091",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนProjectorตรงกลางห้อง"
  },
  {
    "id": "eq-2100092",
    "name": "[2100092] TV Monitoring 7\"",
    "type": "Projector",
    "serialNumber": "7\"",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100092",
    "status": "available",
    "notes": "แบบลอยตัว - วางบนธรรมาสกลางห้อง"
  },
  {
    "id": "eq-2100093",
    "name": "[2100093] Camera DataVideo PTZ-140",
    "type": "Camera",
    "serialNumber": "PTZ-140",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2100093",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งตรงกลางห้ลังห้อง"
  },
  {
    "id": "eq-2100094",
    "name": "[2100094] TV Monitoring LG 65UJ654T",
    "type": "Projector",
    "serialNumber": "65UJ654T",
    "location": "อาคาร 4 ชั้น ชั้น 2 ห้องคณะสตรี",
    "qrCode": "MTC-EQ-2100094",
    "status": "available",
    "notes": "แบบติดตรึง - ติดกับผนังหน้าห้อง"
  },
  {
    "id": "eq-2100095",
    "name": "[2100095] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 4 ชั้น ชั้น 2 ห้องคณะสตรี",
    "qrCode": "MTC-EQ-2100095",
    "status": "available",
    "notes": "แบบติดตรึง - ติดกัับหลัง TV หน้าห้อง"
  },
  {
    "id": "eq-2100096",
    "name": "[2100096] Video Converter BlackMagic SDI To HDMI",
    "type": "Other",
    "serialNumber": "SDI To HDMI",
    "location": "อาคาร 180 ปี ห้อง 383 (ห้องคณะบุรุษ)",
    "qrCode": "MTC-EQ-2100096",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้ฝั่งซ้ายหน้าห้อง"
  },
  {
    "id": "eq-2100097",
    "name": "[2100097] Video Converter HDMI Audio Extractor",
    "type": "SoundSystem",
    "serialNumber": "HDMI Audio Extractor",
    "location": "อาคาร 180 ปี ห้อง 383 (ห้องคณะบุรุษ)",
    "qrCode": "MTC-EQ-2100097",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้ฝั่งซ้ายหน้าห้อง"
  },
  {
    "id": "eq-2100098",
    "name": "[2100098] TV Monitoring LG 65UJ654T",
    "type": "Projector",
    "serialNumber": "65UJ654T",
    "location": "อาคาร 180 ปี ห้อง 383 (ห้องคณะบุรุษ)",
    "qrCode": "MTC-EQ-2100098",
    "status": "available",
    "notes": "แบบติดตรึง - ติดกับผนังหน้าห้อง"
  },
  {
    "id": "eq-2100099",
    "name": "[2100099] Switcher Karmer VS-42H2 4x2 4K",
    "type": "Other",
    "serialNumber": "VS-42H2 4x2 4K",
    "location": "อาคาร 180 ปี ห้อง 383 (ห้องคณะบุรุษ)",
    "qrCode": "MTC-EQ-2100099",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่ในตู้ฝั่งซ้ายหน้าห้อง"
  },
  {
    "id": "eq-2100101",
    "name": "[2100101] Switcher SnapShow MS-002",
    "type": "Other",
    "serialNumber": "MS-002",
    "location": "อาคาร 4 ชั้น ชั้น 4 ห้องประชุมคริสตจักร",
    "qrCode": "MTC-EQ-2100101",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งตรงกลางห้อง บน Projector"
  },
  {
    "id": "eq-2100102",
    "name": "[2100102] Switcher UGREEN 40234 HDMI Switch",
    "type": "Other",
    "serialNumber": "40234 HDMI Switch",
    "location": "อาคาร 4 ชั้น ชั้น 4 ห้องประชุมคริสตจักร",
    "qrCode": "MTC-EQ-2100102",
    "status": "available",
    "notes": "แบบลอยตัว - บนโต๊ะประชุม"
  },
  {
    "id": "eq-2100103",
    "name": "[2100103] Splitter UGREEN 40210 HDMI Splitter",
    "type": "Other",
    "serialNumber": "40210 HDMI Splitter",
    "location": "อาคาร 4 ชั้น ชั้น 4 ห้องประชุมคริสตจักร",
    "qrCode": "MTC-EQ-2100103",
    "status": "available",
    "notes": "แบบลอยตัว - ใต้โต๊ะประชุม"
  },
  {
    "id": "eq-2100104",
    "name": "[2100104] Computer ประกอบ",
    "type": "Other",
    "serialNumber": "2100104",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100104",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้เป็น LIVE ตั้งบนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100105",
    "name": "[2100105] Display Monitoring ACER 21\"",
    "type": "Projector",
    "serialNumber": "21\"",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100105",
    "status": "available",
    "notes": "แบบลอยตัว - อยูู่่บนโต๊ะควบคุมระบบภาพ-เสียง ใช้คู่กับคอมLIVE"
  },
  {
    "id": "eq-2100106",
    "name": "[2100106] Audio Interface Focusrite Scarlett 2i2 3rd Gen",
    "type": "SoundSystem",
    "serialNumber": "Scarlett 2i2 3rd Gen",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100106",
    "status": "available",
    "notes": "แบบลอยตัว - นำเสียงจาก Mixer เข้าคอมฯLIVE"
  },
  {
    "id": "eq-2100107",
    "name": "[2100107] สำรองไฟ (UPS) APC 800VA",
    "type": "Other",
    "serialNumber": "800VA",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100107",
    "status": "available",
    "notes": "แบบลอยตัว - สำรองไฟให้ คอมLive อยู่ใต้โต๊ะควบคุมภาพ-เสียง"
  },
  {
    "id": "eq-2100108",
    "name": "[2100108] Tripod-ขาตั้งกล้อง",
    "type": "Camera",
    "serialNumber": "2100108",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100108",
    "status": "available",
    "notes": "แบบลอยตัว - ตั้งอยู่หลังห้อง ใกล้โต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100109",
    "name": "[2100109] Camera Panasonic Lumix G9 DMC-G9LGA-K",
    "type": "Camera",
    "serialNumber": "Lumix G9 DMC-G9LGA-K",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100109",
    "status": "available",
    "notes": "แบบลอยตัว - ตั้งอยู่หลังห้อง ใกล้โต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2100110",
    "name": "[2100110] Adapter Panasonic DWM-DCC17GU DC CUPLER",
    "type": "Other",
    "serialNumber": "DWM-DCC17GU DC CUPLER",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100110",
    "status": "available",
    "notes": "แบบลอยตัว - ติดตั้งอยู่ในตัวกล้อง"
  },
  {
    "id": "eq-2100111",
    "name": "[2100111] Adapter Panasonic ac adaptor DWM-ac10GC",
    "type": "Other",
    "serialNumber": "ac adaptor DWM-ac10GC",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100111",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้คูู่่กับ DWM-DCC17GU"
  },
  {
    "id": "eq-2100112",
    "name": "[2100112] Camera Acc HOYA 62 MM UV(0)",
    "type": "Camera",
    "serialNumber": "62 MM UV(0)",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100112",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งบนเลนกล้อง"
  },
  {
    "id": "eq-2100113",
    "name": "[2100113] Splitter Ugreen 1x2 [4K]",
    "type": "Other",
    "serialNumber": "1x2 [4K]",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100113",
    "status": "available",
    "notes": "แบบติดตรึง - อยูู่่บนโต๊ะควบคุมระบบภาพ-เสียง ใช้คู่กับคอมLIVE"
  },
  {
    "id": "eq-2100114",
    "name": "[2100114] Headphone Audio technica ATH-M30x",
    "type": "SoundSystem",
    "serialNumber": "ATH-M30x",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2100114",
    "status": "available",
    "notes": "แบบติดตรึง - อยูู่่บนโต๊ะควบคุมระบบภาพ-เสียง ใช้คู่กับคอมLIVE"
  },
  {
    "id": "eq-2200001.0",
    "name": "[2200001.0] SDI Splitter BlackMagic SDI Distribution",
    "type": "Other",
    "serialNumber": "SDI Distribution",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2200001.0",
    "status": "available",
    "notes": "เก็บไว้ที่ห้องออฟฟิศ"
  },
  {
    "id": "eq-2200002.0",
    "name": "[2200002.0] Adapter Panasonic DE-A20",
    "type": "Other",
    "serialNumber": "DE-A20",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2200002.0",
    "status": "available",
    "notes": "แบบลอยตัว - ห้องทิโมธี"
  },
  {
    "id": "eq-2200003.0",
    "name": "[2200003.0] Projector Acer PL6510",
    "type": "Projector",
    "serialNumber": "PL6510",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2200003.0",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งตรงกลางห้อง"
  },
  {
    "id": "eq-2200004.0",
    "name": "[2200004.0] Microphone RODE M5",
    "type": "Microphone",
    "serialNumber": "M5",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2200004.0",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่โบสถ์ใหญ่"
  },
  {
    "id": "eq-2200005.0",
    "name": "[2200005.0] Microphone RODE M5",
    "type": "Microphone",
    "serialNumber": "M5",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2200005.0",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่โบสถ์ใหญ่"
  },
  {
    "id": "eq-2200006.0",
    "name": "[2200006.0] Microphone RODE M5",
    "type": "Microphone",
    "serialNumber": "M5",
    "location": "อาคารหอระฆัง ชั้น 5 ห้องชั้นหอระฆัง",
    "qrCode": "MTC-EQ-2200006.0",
    "status": "available",
    "notes": "แบบลอยตัว - 501.0"
  },
  {
    "id": "eq-2200007.0",
    "name": "[2200007.0] Microphone RODE M5",
    "type": "Microphone",
    "serialNumber": "M5",
    "location": "อาคารหอระฆัง ชั้น 5 ห้องชั้นหอระฆัง",
    "qrCode": "MTC-EQ-2200007.0",
    "status": "available",
    "notes": "แบบลอยตัว - 501.0"
  },
  {
    "id": "eq-2300001.0",
    "name": "[2300001.0] Tour Guide Okayo WT-300T",
    "type": "SoundSystem",
    "serialNumber": "WT-300T",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300001.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300002.0",
    "name": "[2300002.0] Tour Guide Okayo WT-300T",
    "type": "SoundSystem",
    "serialNumber": "WT-300T",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300002.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300003.0",
    "name": "[2300003.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300003.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300004.0",
    "name": "[2300004.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300004.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300005.0",
    "name": "[2300005.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300005.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300006.0",
    "name": "[2300006.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300006.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300007.0",
    "name": "[2300007.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300007.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300008.0",
    "name": "[2300008.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300008.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300009.0",
    "name": "[2300009.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300009.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300010.0",
    "name": "[2300010.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300010.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300011.0",
    "name": "[2300011.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300011.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300012.0",
    "name": "[2300012.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่-คอกแปลภาษา",
    "qrCode": "MTC-EQ-2300012.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300013.0",
    "name": "[2300013.0] Tour Guide Okayo HDC-712",
    "type": "SoundSystem",
    "serialNumber": "HDC-712",
    "location": "หน้าประตูใหญ่-เค้าน์เตอร์ รปภ.",
    "qrCode": "MTC-EQ-2300013.0",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่เค้าเตอร์ รปภ. ให้วันเฉลิม ชาร์ทให้"
  },
  {
    "id": "eq-2300014.0",
    "name": "[2300014.0] กล่องเก็บอุปกรณ์ Okayo AC 300",
    "type": "Other",
    "serialNumber": "AC 300",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300014.0",
    "status": "available",
    "notes": "แบบลอยตัว - กล่องเก็บอุปกรณ์หลังชาร์ทเสร็จ"
  },
  {
    "id": "eq-2300015.0",
    "name": "[2300015.0] Projector Epson EB-L630U",
    "type": "Projector",
    "serialNumber": "EB-L630U",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300015.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฉายภาพฝั่งเปียโน"
  },
  {
    "id": "eq-2300016.0",
    "name": "[2300016.0] Projector Epson EB-L630U",
    "type": "Projector",
    "serialNumber": "EB-L630U",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300016.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฉายภาพฝั่งติดห้องนมัสการรอง"
  },
  {
    "id": "eq-2300017.0",
    "name": "[2300017.0] Display Monitoring Asus VP229HE",
    "type": "Projector",
    "serialNumber": "VP229HE",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300017.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้คู่กับคอมฯ PPT อยู่บนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2300018.0",
    "name": "[2300018.0] Computer ประกอบ",
    "type": "Other",
    "serialNumber": "2300018.0",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง-โต๊ะคุมภาพเสียง",
    "qrCode": "MTC-EQ-2300018.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้เป็น LIVE ตั้งบนโต๊ะควบคุมระบบภาพ-เสียง"
  },
  {
    "id": "eq-2300019.0",
    "name": "[2300019.0] Video Converter BlackMagic HDMI to SDI",
    "type": "Other",
    "serialNumber": "HDMI to SDI",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300019.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใต้โต๊ะคุมเสียง โบสถ์ล่าง"
  },
  {
    "id": "eq-2300020.0",
    "name": "[2300020.0] Video Converter BlackMagic HDMI to SDI",
    "type": "Other",
    "serialNumber": "HDMI to SDI",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300020.0",
    "status": "available",
    "notes": "แบบลอยตัว - ช่องเก็บสายไฟกลางเวทีโบสถ์ล่าง"
  },
  {
    "id": "eq-2300021.0",
    "name": "[2300021.0] Video Converter BlackMagic HDMI to SDI",
    "type": "Other",
    "serialNumber": "HDMI to SDI",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300021.0",
    "status": "available",
    "notes": "แบบลอยตัว - ช่องเก็บสายไฟกลางเวทีโบสถ์ล่าง"
  },
  {
    "id": "eq-2300022.0",
    "name": "[2300022.0] SDI Splitter BlackMagic SDI Distribution",
    "type": "Other",
    "serialNumber": "SDI Distribution",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300022.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใต้โต๊ะคุมเสียง โบสถ์ล่าง"
  },
  {
    "id": "eq-2300023.0",
    "name": "[2300023.0] Video Hub BlackMagic Smart-VideoHub 12x12",
    "type": "Other",
    "serialNumber": "Smart-VideoHub 12x12",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300023.0",
    "status": "available",
    "notes": "แบบติดตรึง - อยู่ในตู้Rack ใต้โต๊ะ ควบคุมระบบภาพ-เสียงโบสถ์ล่าง"
  },
  {
    "id": "eq-2300024.0",
    "name": "[2300024.0] Splitter UGREEN เข้า 1 ออก 4",
    "type": "Other",
    "serialNumber": "เข้า 1 ออก 4",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300024.0",
    "status": "available",
    "notes": "แบบลอยตัว - ช่องเก็บสายตรงกลาง บนพื้นเวทีธรรมมาสโบสถ์ล่าง"
  },
  {
    "id": "eq-2300025.0",
    "name": "[2300025.0] Display Monitoring SVOA ViewSonic VG1655 15.6\"",
    "type": "Projector",
    "serialNumber": "ViewSonic VG1655 15.6\"",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300025.0",
    "status": "available",
    "notes": "แบบลอยตัว - มอนิเตอร์สำหรับผู้นำ โบสถ์ล่าง"
  },
  {
    "id": "eq-2300026.0",
    "name": "[2300026.0] Splitter Ugreen 1x2 [4K]",
    "type": "Other",
    "serialNumber": "1x2 [4K]",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300026.0",
    "status": "available",
    "notes": "แบบติดตรึง - อยู่บนโต๊ะควบคุมระบบภาพ-เสียงโบสถ์ล่าง"
  },
  {
    "id": "eq-2300027.0",
    "name": "[2300027.0] Switcher UGREEN 40234 HDMI Switch",
    "type": "Other",
    "serialNumber": "40234 HDMI Switch",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300027.0",
    "status": "available",
    "notes": "แบบลอยตัว - ช่องเก็บสายตรงกลาง บนพื้นเวทีธรรมมาสโบสถ์ล่าง"
  },
  {
    "id": "eq-2300028.0",
    "name": "[2300028.0] คอมพิวเตอร์ All-in-one Asus Zen Aio 24 M5401WYAK",
    "type": "Other",
    "serialNumber": "Zen Aio 24 M5401WYAK",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300028.0",
    "status": "available",
    "notes": "แบบติดตรึง - อยู่บนโต๊ะควบคุมระบบภาพ-เสียงโบสถ์ล่าง"
  },
  {
    "id": "eq-2300029.0",
    "name": "[2300029.0] Display Monitoring ACER 21\" SA222Qebi",
    "type": "Projector",
    "serialNumber": "21\" SA222Qebi",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300029.0",
    "status": "available",
    "notes": "แบบลอยตัว - อยู่บนโต๊ะควบคุมระบบภาพ-เสียง ใช้คู่กับคอมPPT"
  },
  {
    "id": "eq-2300030.0",
    "name": "[2300030.0] ปลั๊กพ่วง Anitech h1233-wh 3m.",
    "type": "Other",
    "serialNumber": "h1233-wh 3m.",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300030.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใต้โต๊ะคุมเสียง โบสถ์ล่าง"
  },
  {
    "id": "eq-2300031.0",
    "name": "[2300031.0] ปลั๊กพ่วง Anitech h1233-wh 3m.",
    "type": "Other",
    "serialNumber": "h1233-wh 3m.",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300031.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใต้โต๊ะคุมเสียง โบสถ์ล่าง"
  },
  {
    "id": "eq-2300032.0",
    "name": "[2300032.0] ปลั๊กพ่วง Anitech h1233-wh 3m.",
    "type": "Other",
    "serialNumber": "h1233-wh 3m.",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300032.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใต้โต๊ะคุมเสียง โบสถ์ล่าง"
  },
  {
    "id": "eq-2300033.0",
    "name": "[2300033.0] ปลั๊กพ่วง Anitech h1233-wh 3m.",
    "type": "Other",
    "serialNumber": "h1233-wh 3m.",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300033.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใต้โต๊ะคุมเสียง โบสถ์ล่าง"
  },
  {
    "id": "eq-2300034.0",
    "name": "[2300034.0] สำรองไฟ (UPS) APC",
    "type": "Other",
    "serialNumber": "2300034.0",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300034.0",
    "status": "available",
    "notes": null
  },
  {
    "id": "eq-2300035.0",
    "name": "[2300035.0] สำรองไฟ (UPS) APC",
    "type": "Other",
    "serialNumber": "2300035.0",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300035.0",
    "status": "available",
    "notes": null
  },
  {
    "id": "eq-2300036.0",
    "name": "[2300036.0] สำรองไฟ (UPS) APC",
    "type": "Other",
    "serialNumber": "2300036.0",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300036.0",
    "status": "available",
    "notes": null
  },
  {
    "id": "eq-2300037.0",
    "name": "[2300037.0] Projector Epson EB-L630U",
    "type": "Projector",
    "serialNumber": "EB-L630U",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2300037.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฉายภาพฝั่งเปียโน"
  },
  {
    "id": "eq-2300038.0",
    "name": "[2300038.0] Projector Epson EB-L630U",
    "type": "Projector",
    "serialNumber": "EB-L630U",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2300038.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฝั่งห้องน้ำ"
  },
  {
    "id": "eq-2300039.0",
    "name": "[2300039.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300039.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300040.0",
    "name": "[2300040.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300040.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300041.0",
    "name": "[2300041.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300041.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300042.0",
    "name": "[2300042.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300042.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300043.0",
    "name": "[2300043.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300043.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300044.0",
    "name": "[2300044.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300044.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300045.0",
    "name": "[2300045.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300045.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300046.0",
    "name": "[2300046.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300046.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300047.0",
    "name": "[2300047.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300047.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300048.0",
    "name": "[2300048.0] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300048.0",
    "status": "available",
    "notes": "แบบลอยตัว - สำหรับคนฟังแปลภาษาโบสถ์ใหญ่"
  },
  {
    "id": "eq-2300049.0",
    "name": "[2300049.0] กล่องเก็บอุปกรณ์ Okayo CCW-28",
    "type": "Other",
    "serialNumber": "CCW-28",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300049.0",
    "status": "available",
    "notes": "แบบลอยตัว - กล่องเก็บอุปกรณ์หลังชาร์ทเสร็จ"
  },
  {
    "id": "eq-2300050.0",
    "name": "[2300050.0] Projector Epson EB-L630U",
    "type": "Projector",
    "serialNumber": "EB-L630U",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2300050.0",
    "status": "available",
    "notes": "แบบติดตรึง - กลางห้องนมัสการ"
  },
  {
    "id": "eq-2300051.0",
    "name": "[2300051.0] Projector Epson EB-L260F",
    "type": "Projector",
    "serialNumber": "EB-L260F",
    "location": "อาคาร 3 ชั้น ชั้น 3 ห้อง310",
    "qrCode": "MTC-EQ-2300051.0",
    "status": "available",
    "notes": "แบบติดตรึง - กลางห้องนมัสการ"
  },
  {
    "id": "eq-2300052.0",
    "name": "[2300052.0] จอรับภาพ Projector Vertex 120\"",
    "type": "Projector",
    "serialNumber": "120\"",
    "location": "อาคาร 3 ชั้น ชั้น 3 ห้อง310",
    "qrCode": "MTC-EQ-2300052.0",
    "status": "available",
    "notes": "แบบติดตรึง - กลางห้องนมัสการ"
  },
  {
    "id": "eq-2300053.0",
    "name": "[2300053.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "อาคารหอพัก ชั้น 2 ห้องข้างบันไดโบสถ์ใหญ่ชั้น2",
    "qrCode": "MTC-EQ-2300053.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฝั่งห้องนมัสการรอง"
  },
  {
    "id": "eq-2300054.0",
    "name": "[2300054.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "อาคารหอพัก ชั้น 2 ห้องข้างบันไดโบสถ์ใหญ่ชั้น2",
    "qrCode": "MTC-EQ-2300054.0",
    "status": "available",
    "notes": "แบบติดตรึง - กลางห้องนมัสการ"
  },
  {
    "id": "eq-2300055.0",
    "name": "[2300055.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "อาคารหอพัก ชั้น 2 ห้องข้างบันไดโบสถ์ใหญ่ชั้น2",
    "qrCode": "MTC-EQ-2300055.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฝั่งเปียโน"
  },
  {
    "id": "eq-2300056.0",
    "name": "[2300056.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "ชั้น3ใหม่ อาคารโบสถ์ใหญ่ ห้อง 310",
    "qrCode": "MTC-EQ-2300056.0",
    "status": "available",
    "notes": "แบบติดตรึง - เค้าเตอร์คุมเสียงห้องนมัสการ"
  },
  {
    "id": "eq-2300057.0",
    "name": "[2300057.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2300057.0",
    "status": "available",
    "notes": "แบบติดตรึง - เค้าเตอร์คุมเสียงห้องนมัสการ"
  },
  {
    "id": "eq-2300058.0",
    "name": "[2300058.0] Camera Control TelyCam TCL-50TC NDI",
    "type": "Camera",
    "serialNumber": "TCL-50TC NDI",
    "location": "อาคารหอพัก ชั้น 2 ห้องข้างบันไดโบสถ์ใหญ่ชั้น2",
    "qrCode": "MTC-EQ-2300058.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300059.0",
    "name": "[2300059.0] Camera Control TelyCam TCL-50TC NDI",
    "type": "Camera",
    "serialNumber": "TCL-50TC NDI",
    "location": "ชั้น3ใหม่ อาคารโบสถ์ใหญ่ ห้อง 310",
    "qrCode": "MTC-EQ-2300059.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300060.0",
    "name": "[2300060.0] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "อาคารหอพัก ชั้น 2 ห้องข้างบันไดโบสถ์ใหญ่ชั้น2",
    "qrCode": "MTC-EQ-2300060.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300061.0",
    "name": "[2300061.0] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "ชั้น3ใหม่ อาคารโบสถ์ใหญ่ ห้อง 310",
    "qrCode": "MTC-EQ-2300061.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300062.0",
    "name": "[2300062.0] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2300062.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300063.0",
    "name": "[2300063.0] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2300063.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300064.0",
    "name": "[2300064.0] Video Converter kiloview N5 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N5 Bi-Directional Convert",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300064.0",
    "status": "available",
    "notes": "แบบลอยตัว - เก็บไวที่โต๊ะปิงปอง"
  },
  {
    "id": "eq-2300065.0",
    "name": "[2300065.0] Video Converter kiloview N6 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N6 Bi-Directional Convert",
    "location": "อาคาร 3 ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300065.0",
    "status": "available",
    "notes": "แบบลอยตัว - เก็บไวที่โต๊ะปิงปอง"
  },
  {
    "id": "eq-2300066.0",
    "name": "[2300066.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2300066.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฝั่งห้องน้ำ"
  },
  {
    "id": "eq-2300067.0",
    "name": "[2300067.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2300067.0",
    "status": "available",
    "notes": "แบบติดตรึง - กลางห้อง"
  },
  {
    "id": "eq-2300068.0",
    "name": "[2300068.0] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2300068.0",
    "status": "available",
    "notes": "แบบติดตรึง - ฝั่งห้องครัวเก่า"
  },
  {
    "id": "eq-2300069.0",
    "name": "[2300069.0] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2300069.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300070.0",
    "name": "[2300070.0] Camera Control TelyCam TCL-50TC NDI",
    "type": "Camera",
    "serialNumber": "TCL-50TC NDI",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องนมัสการล่าง",
    "qrCode": "MTC-EQ-2300070.0",
    "status": "available",
    "notes": "แบบลอยตัว"
  },
  {
    "id": "eq-2300071.0",
    "name": "[2300071.0] Video Converter kiloview N6 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N6 Bi-Directional Convert",
    "location": "อาคาร 180 ปี ห้อง 381 (นมัสการชั้น3 & ภาคบ่าย)",
    "qrCode": "MTC-EQ-2300071.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้งานกับกล้องรุ่นเก่า DataVideo"
  },
  {
    "id": "eq-2300072.0",
    "name": "[2300072.0] Video Converter kiloview N6 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N6 Bi-Directional Convert",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300072.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้งานกับCom PPT โบสถ์ใหญ่"
  },
  {
    "id": "eq-2300073.0",
    "name": "[2300073.0] Program Vmix V29 4K",
    "type": "Other",
    "serialNumber": "V29 4K",
    "location": "อาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "qrCode": "MTC-EQ-2300073.0",
    "status": "available",
    "notes": "แบบติดตรึง - ใช้งานกับคอม LIVE ของห้องนมัสการทิโมธี"
  },
  {
    "id": "eq-2300074.0",
    "name": "[2300074.0] Program Vmix V29 HD",
    "type": "Other",
    "serialNumber": "V29 HD",
    "location": "อาคาร 4 ชั้น ชั้น 1 ห้องเอนกประสงค์",
    "qrCode": "MTC-EQ-2300074.0",
    "status": "available",
    "notes": "แบบติดตรึง - ใช้งานกับคอม LIVE ของห้องอเนกประสงค์"
  },
  {
    "id": "eq-2300075.0",
    "name": "[2300075.0] Microphone Stand Shure MX 418",
    "type": "Microphone",
    "serialNumber": "MX 418",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300075.0",
    "status": "available",
    "notes": "แบบติดตรึง - ใช้บนธรรมมาศ"
  },
  {
    "id": "eq-2300076.0",
    "name": "[2300076.0] Microphone Stand Shure MX 418",
    "type": "Microphone",
    "serialNumber": "MX 418",
    "location": "อาคาร 3 ชั้น ชั้น 2 ห้องนมัสการใหญ่",
    "qrCode": "MTC-EQ-2300076.0",
    "status": "available",
    "notes": "แบบติดตรึง - ใช้บนธรรมมาศ"
  },
  {
    "id": "eq-2300077.0",
    "name": "[2300077.0] Audio Interface Yamaha UR22 C",
    "type": "SoundSystem",
    "serialNumber": "UR22 C",
    "location": "ชั้น3ใหม่ อาคารโบสถ์ใหญ่ ห้อง 301",
    "qrCode": "MTC-EQ-2300077.0",
    "status": "available",
    "notes": "แบบลอยตัว - ใช้กับห้อง 301 อาคารนมัสการใหญ่"
  },
  {
    "id": "eq-2300078.0",
    "name": "[2300078.0] TV Monitoring Samsung 55\"",
    "type": "Projector",
    "serialNumber": "55\"",
    "location": "อาคาร 3 ชั้น ชั้น 1 ห้องแกะน้อย",
    "qrCode": "MTC-EQ-2300078.0",
    "status": "available",
    "notes": "แบบติดตรึง - ห้องแกะน้อย"
  },
  {
    "id": "eq-2300079.0",
    "name": "[2300079.0] Projector Epson EB-L260F",
    "type": "Projector",
    "serialNumber": "EB-L260F",
    "location": "อาคาร 4 ชั้น ชั้น 4 ห้องประชุมคริสตจักร",
    "qrCode": "MTC-EQ-2300079.0",
    "status": "available",
    "notes": "แบบติดตรึง - ติดตั้งกลางห้องประชุม มน."
  },
  {
    "id": "eq-2100200",
    "name": "[2100200] Projector Epson EB-L260F",
    "type": "Projector",
    "serialNumber": "EB-L260F",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100200",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100201",
    "name": "[2100201] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100201",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100202",
    "name": "[2100202] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100202",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100203",
    "name": "[2100203] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100203",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100204",
    "name": "[2100204] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100204",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100205",
    "name": "[2100205] Camera Control TelyCam TCL-50TC NDI",
    "type": "Camera",
    "serialNumber": "TCL-50TC NDI",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100205",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100206",
    "name": "[2100206] Video Converter kiloview N6 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N6 Bi-Directional Convert",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100206",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100207",
    "name": "[2100207] Video Converter kiloview N6 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N6 Bi-Directional Convert",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100207",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100208",
    "name": "[2100208] Program Vmix V29 4K",
    "type": "Other",
    "serialNumber": "V29 4K",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100208",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100209",
    "name": "[2100209] Program Vmix V29 HD",
    "type": "Other",
    "serialNumber": "V29 HD",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100209",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100210",
    "name": "[2100210] Microphone Stand Shure MX 418",
    "type": "Microphone",
    "serialNumber": "MX 418",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100210",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100211",
    "name": "[2100211] Microphone Stand Shure MX 418",
    "type": "Microphone",
    "serialNumber": "MX 418",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100211",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100212",
    "name": "[2100212] Camera TelyCam TCL-700 IP30-4K NDI",
    "type": "Camera",
    "serialNumber": "TCL-700 IP30-4K NDI",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100212",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100213",
    "name": "[2100213] TV Monitoring Samsung 55\"",
    "type": "Projector",
    "serialNumber": "55\"",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100213",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100214",
    "name": "[2100214] Projector Epson EB-L630U",
    "type": "Projector",
    "serialNumber": "EB-L630U",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100214",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100215",
    "name": "[2100215] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100215",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100216",
    "name": "[2100216] Network Netgear GS308EPP 8Port POE",
    "type": "Other",
    "serialNumber": "GS308EPP 8Port POE",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100216",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100217",
    "name": "[2100217] Video Converter kiloview N6 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N6 Bi-Directional Convert",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100217",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100218",
    "name": "[2100218] Audio Interface Yamaha UR22 C",
    "type": "SoundSystem",
    "serialNumber": "UR22 C",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100218",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100219",
    "name": "[2100219] Video Converter kiloview N5 Bi-Directional Convert",
    "type": "Other",
    "serialNumber": "N5 Bi-Directional Convert",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100219",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100220",
    "name": "[2100220] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100220",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  },
  {
    "id": "eq-2100221",
    "name": "[2100221] Tour Guide Okayo WT-300R",
    "type": "SoundSystem",
    "serialNumber": "WT-300R",
    "location": "คลังทรัพย์สินส่วนกลาง ชั้น 1",
    "qrCode": "MTC-EQ-2100221",
    "status": "available",
    "notes": "รายการทรัพย์สินจากการจัดซื้อจัดจ้าง"
  }
];

export const MOCK_EXCEL_BOOKINGS = [
  {
    "id": "booking-mtc-101",
    "staffId": "staff-1",
    "equipmentId": "eq-2100003",
    "equipmentName": "[2100003] Camera DataVideo PTZ-140",
    "purpose": "บันทึกเทปรายการนมัสการวันอาทิตย์ประจำสัปดาห์ (ห้องนมัสการใหญ่)",
    "borrowDate": "2026-08-08T09:00:00.000Z",
    "returnDate": "2026-08-08T16:00:00.000Z",
    "status": "borrowed",
    "handoverAt": "2026-08-08T08:45:00.000Z",
    "handoverSignerName": "อาจารย์เที้ยง",
    "handoverSignature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "returnAt": null,
    "returnSignerName": null,
    "returnSignature": null,
    "createdAt": "2026-08-07T10:00:00.000Z",
    "updatedAt": "2026-08-08T08:45:00.000Z",
    "Staff": {
      "name": "อาจารย์เที้ยง",
      "role": "ศาสนาจารย์"
    },
    "Equipment": {
      "name": "[2100003] Camera DataVideo PTZ-140",
      "type": "Camera"
    }
  },
  {
    "id": "booking-mtc-102",
    "staffId": "staff-2",
    "equipmentId": "eq-2100006",
    "equipmentName": "[2100006] Camera Control DataVideo RMC-180",
    "purpose": "ควบคุมกล้องสตรีมมิ่งสดผ่าน Vmix 29 4K (งานค่ายเยาวชน MTC)",
    "borrowDate": "2026-08-09T08:00:00.000Z",
    "returnDate": "2026-08-09T18:00:00.000Z",
    "status": "pending_handover",
    "handoverAt": null,
    "handoverSignerName": null,
    "handoverSignature": null,
    "returnAt": null,
    "returnSignerName": null,
    "returnSignature": null,
    "createdAt": "2026-08-08T14:00:00.000Z",
    "updatedAt": "2026-08-08T14:00:00.000Z",
    "Staff": {
      "name": "อาจารย์ไก่",
      "role": "ผู้นำนมัสการ"
    },
    "Equipment": {
      "name": "[2100006] Camera Control DataVideo RMC-180",
      "type": "Camera"
    }
  },
  {
    "id": "booking-mtc-103",
    "staffId": "staff-4",
    "equipmentId": "eq-2100034",
    "equipmentName": "[2100034] Camera Panasonic 3CCD P2HD",
    "purpose": "ถ่ายภาพรอบงานการกุศลอาคาร 180 ปี ห้อง 481 (ทิโมธี)",
    "borrowDate": "2026-08-05T10:00:00.000Z",
    "returnDate": "2026-08-05T17:00:00.000Z",
    "status": "returned",
    "handoverAt": "2026-08-05T09:50:00.000Z",
    "handoverSignerName": "เฮียปิงปอง",
    "handoverSignature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "returnAt": "2026-08-05T16:55:00.000Z",
    "returnSignerName": "เฮียปิงปอง",
    "returnSignature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "createdAt": "2026-08-04T11:00:00.000Z",
    "updatedAt": "2026-08-05T16:55:00.000Z",
    "Staff": {
      "name": "เฮียปิงปอง",
      "role": "เจ้าหน้าที่"
    },
    "Equipment": {
      "name": "[2100034] Camera Panasonic 3CCD P2HD",
      "type": "Camera"
    }
  }
];
