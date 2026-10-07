import {env} from 'cloudflare:workers';
export function database(){if(!env.DB)throw Error('Database unavailable');return env.DB;}
export function config(){return env as unknown as Record<string,string>;}
export async function initialize(){await database().prepare('INSERT OR IGNORE INTO campaigns (id,name,description,status) VALUES (?,?,?,?)').bind('naseem','The Naseem Scholarship','A full school year of tuition, uniforms, books and stationery for children in Pakistan.','active').run();await database().prepare("UPDATE campaigns SET sponsored=3 WHERE id='naseem' AND sponsored IS NULL").run();}
