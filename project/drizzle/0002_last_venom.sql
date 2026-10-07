CREATE TABLE `allocations` (
	`id` text PRIMARY KEY NOT NULL,
	`campaign` text NOT NULL,
	`category` text NOT NULL,
	`amount` integer NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`updated` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_allocations_campaign` ON `allocations` (`campaign`);--> statement-breakpoint
ALTER TABLE `campaigns` ADD `sponsored` integer;