import { EventTask } from "@/types";

export const EVENTS_DATA: EventTask[] = [
    {
        id: "evt-1",
        title: "Morning Prayer",
        date: "2026-06-12",
        time: "06:00 - 07:00",
        description: "Lead prayer meeting",
        type: "Service",
        location: "Main Sanctuary",
        color: "#EF5350", // Red
    },
    {
        id: "evt-2",
        title: "Staff Meeting",
        date: "2026-06-12",
        time: "09:00 - 11:00",
        description: "Weekly staff briefing",
        type: "Meeting",
        location: "Conference Room B",
        color: "#42A5F5", // Blue
    },
    {
        id: "task-1",
        title: "Prepare Sermon Slides",
        date: "2026-06-12",
        time: "14:00 - 16:00",
        type: "Task",
        assignee: "user_1",
        description: "For Sunday Service topic: Faith",
        status: "pending",
        priority: "medium",
        color: "#FFCA28", // Yellow
    },
    {
        id: "evt-3",
        title: "Youth Outreach Planning",
        date: "2026-06-13",
        time: "17:00 - 19:00",
        type: "Ministry",
        location: "Youth Hall",
        color: "#66BB6A", // Green
    },
    {
        id: "evt-4",
        title: "Sunday Service",
        date: "2026-06-15",
        time: "09:00 - 12:00",
        type: "Service",
        location: "Main Sanctuary",
        color: "#EF5350",
    },
    {
        id: "task-2",
        title: "Visit Elder Boonmee",
        date: "2026-06-14",
        time: "13:00 - 15:00",
        type: "Task",
        assignee: "user_1",
        description: "Hospital visitation",
        status: "done",
        priority: "high",
        color: "#AB47BC", // Purple
    },
];

// Mock Master Data (Dropdown Options)
export const MASTER_DATA = {
    categories: [
        { id: "cat_1", label: "General Task", value: "general", color: "#757575" },
        { id: "cat_2", label: "Pastoral Care", value: "pastoral", color: "#AB47BC" },
        { id: "cat_3", label: "Maintenance", value: "maintena", color: "#FF7043" },
        { id: "cat_4", label: "IT / Media", value: "it", color: "#42A5F5" },
        { id: "cat_5", label: "Administrative", value: "admin", color: "#78909C" },
    ],
    priorities: [
        { id: "prio_1", label: "Low", value: "low" },
        { id: "prio_2", label: "Medium", value: "medium" },
        { id: "prio_3", label: "High", value: "high" },
        { id: "prio_4", label: "Urgent", value: "urgent" },
    ],
    locations: [
        { id: "loc_1", label: "Main Sanctuary", value: "main_hall" },
        { id: "loc_2", label: "Meeting Room 1", value: "room_1" },
        { id: "loc_3", label: "Youth Hall", value: "youth_hall" },
        { id: "loc_4", label: "Office", value: "office" },
        { id: "loc_5", label: "Off-site", value: "offsite" },
    ],
    assignees: [
        { id: "user_1", label: "Me (Self)", value: "me" },
        { id: "user_2", label: "Staff Team A", value: "team_a" },
        { id: "user_3", label: "Volunteer Group", value: "volunteers" },
    ],
};
