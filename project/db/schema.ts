import {integer, sqliteTable, text, index} from 'drizzle-orm/sqlite-core';
export const campaigns=sqliteTable('campaigns',{id:text('id').primaryKey(),name:text('name').notNull(),description:text('description').notNull(),status:text('status').notNull().default('active'),sponsored:integer('sponsored')});
export const donations=sqliteTable('donations',{id:text('id').primaryKey(),campaign:text('campaign').notNull(),amount:integer('amount').notNull(),refunded:integer('refunded').notNull().default(0),currency:text('currency').notNull(),name:text('name').notNull(),email:text('email').notNull(),status:text('status').notNull(),reference:text('reference').notNull().unique(),created:text('created').notNull()},t=>[index('idx_donations_campaign_status').on(t.campaign,t.status)]);
export const subscribers=sqliteTable('subscribers',{email:text('email').primaryKey(),token:text('token').notNull().unique(),consent:text('consent').notNull(),source:text('source').notNull(),active:integer('active').notNull().default(1)});
export const reports=sqliteTable('reports',{id:text('id').primaryKey(),campaign:text('campaign').notNull(),title:text('title').notNull(),body:text('body').notNull(),created:text('created').notNull()},t=>[index('idx_reports_campaign').on(t.campaign)]);
export const audit=sqliteTable('audit',{id:text('id').primaryKey(),actor:text('actor').notNull(),action:text('action').notNull(),created:text('created').notNull()});
export const outbox=sqliteTable('outbox',{id:text('id').primaryKey(),email:text('email').notNull(),subject:text('subject').notNull(),body:text('body').notNull(),status:text('status').notNull().default('queued'),created:text('created').notNull()});
export const rateLimits=sqliteTable('rate_limits',{id:text('id').primaryKey(),count:integer('count').notNull(),expires:integer('expires').notNull()});

export const allocations=sqliteTable('allocations',{id:text('id').primaryKey(),campaign:text('campaign').notNull(),category:text('category').notNull(),amount:integer('amount').notNull(),note:text('note').notNull().default(''),updated:text('updated').notNull()},t=>[index('idx_allocations_campaign').on(t.campaign)]);

export const siteContent=sqliteTable('site_content',{key:text('key').primaryKey(),value:text('value').notNull(),revision:integer('revision').notNull().default(1)});
