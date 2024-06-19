import { NOW, column, defineDb, defineTable } from 'astro:db';

const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    profilePhotoURL: column.text({ default: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E' }),
    enrollment: column.number({ unique: true }),
    email: column.text({ unique: true }),
    passwrd: column.text({ default: "12345" }),
    firstName: column.text(),
    lastName: column.text(),
    isAdmin: column.boolean({ default: false }),
    createdAt: column.date({ default: NOW })
  }
});

const Articles = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    imageURL: column.text({ optional: true }),
    title: column.text(),
    resume: column.text(),
    content: column.text(),
    createdAt: column.date({ default: NOW }),
    authors: column.json({ default: {
      authorsList: [ 
        {
          id: crypto.randomUUID(),
          name: "John Doe"
        }
      ]
    }})
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    Articles,
  }
});