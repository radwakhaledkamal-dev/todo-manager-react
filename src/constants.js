export const STORAGE_KEY = "todo-app-storage";

export const CATEGORIES = [
  {
    id: 1,
    name: "شخصي",
    color: "#8b5cf6",
  },
  {
    id: 2,
    name: "عمل",
    color: "#22c55e",
  },
  {
    id: 3,
    name: "تسوق",
    color: "#f97316",
  },
  {
    id: 4,
    name: "صحة",
    color: "#ec4899",
  },
];

export const FILTERS = [
    "الكل",
    "نشطة",
    "مكتملة"
];

export const DEFAULT_TODOS = [
    {
        id: crypto.randomUUID(),
        text: "إنهاء مشروع React",
        completed: false,
        category: "عمل",
        createdAt: new Date().toISOString(),
    },
    {
        id: crypto.randomUUID(),
        text: "قراءة 20 صفحة",
        completed: true,
        category: "شخصي",
        createdAt: new Date().toISOString(),
    },
    {
        id: crypto.randomUUID(),
        text: "شراء بعض الاحتياجات",
        completed: false,
        category: "تسوق",
        createdAt: new Date().toISOString(),
    },
];