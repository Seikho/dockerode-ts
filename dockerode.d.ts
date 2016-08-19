import * as stream from 'stream';
import * as events from 'events';

interface CB<T> {
    (error?: any, result?: T): void;
}

interface Options {
    socketPath?: string;
    host?: string;
    port?: number;
    ca?: string;
    cert?: string;
    key?: string;
    protocol?: "https" | "http";
}

export default class Docker {
    constructor(options?: Options);

    createContainer(options: {}, callback: CB<any>): void;

    createImage(options: {}, callback: CB<any>): void;
    createImage(auth: any, options: {}, callback: CB<any>): void;

    loadImage(file: string, options: {}, callback: CB<any>): void;
    loadImage(file: string, callback: CB<any>): void;

    importImage(file: string, options: {}, callback: CB<any>): void;
    importImage(file: string, callback: CB<any>): void;

    checkAuth(options: any, callback: CB<any>): void;

    buildImage(file: string, options: {}, callback: CB<any>): void;
    buildImage(file: string, callback: CB<any>): void;

    getContainer(id: string): Container;

    getImage(name: string): Image;

    getVolume(name: string): Volume;

    getService(id: string): Service;

    getTask(id: string): Task;

    getNode(id: string): Node;

    getNetwork(id: string): Network;

    getExec(id: string): Exec;

    listContainers(options: {}, callback: CB<any[]>): void;
    listContainers(callback: CB<any[]>): void;

    listImages(options: {}, callback: CB<any[]>): void;
    listImages(callback: CB<any[]>): void;

    listServices(options: {}, callback: CB<any[]>): void;
    listServices(callback: CB<any[]>): void;

    listNodes(options: {}, callback: CB<any[]>): void;
    listNodes(callback: CB<any[]>): void;

    listTasks(options: {}, callback: CB<any[]>): void;
    listTasks(callback: CB<any[]>): void;

    listVolumes(options: {}, callback: CB<any[]>): void;
    listVolumes(callback: CB<any[]>): void;

    listNetworks(options: {}, callback: CB<any[]>): void;
    listNetworks(callback: CB<any[]>): void;

    createVolume(options: {}, callback: CB<any>): void;

    createService(options: {}, callback: CB<any>): void;

    createNetwork(options: {}, callback: CB<any>): void;

    searchImages(options: {}, callback: CB<any>): void;

    info(callback: CB<any>): void;

    version(callback: CB<any>): void;

    ping(callback: CB<any>): void;

    getEvents(options: {}, callback: CB<stream.Readable>): void;

    pull(repoTag: string, options: {}, callback: CB<any>, auth?: {}): Image;
    pull(repoTag: string, callback: CB<any>, auth?: {}): Image;

    run(image: string, cmd: string[], outputStream: stream.Writable, createOptions: {}, startOptions: {}, callback: CB<any>): events.EventEmitter;
    run(image: string, cmd: string[], outputStream: stream.Writable, startOptions: {}, callback: CB<any>): events.EventEmitter;
    run(image: string, cmd: string[], outputStream: stream.Writable, callback: CB<any>): events.EventEmitter;
    run(image: string, cmd: string[], outputStream: stream.Writable, createOptions: {}, callback: CB<any>): events.EventEmitter;

    swarmInit(options: {}, callback: CB<any>): void;

    swarmJoin(options: {}, callback: CB<any>): void;

    swarmLeave(options: {}, callback: CB<any>): void;

    swarmUpdate(options: {}, callback: CB<any>): void;


}

declare class Container {
    inspect(options: {}, callback: CB<any>): void;
    inspect(callback: CB<any>): void;
    inspect(options?: {}): { id: string };

    rename(options: {}, callback: CB<any>): void;

    update(options: {}, callback: CB<any>): void;

    top(options: {}, callback: CB<any>): void;
    top(callback: CB<any>): void;

    changes(callback: CB<any>): void;

    export(callback: CB<stream.Readable>): void;

    start(options: {}, callback: CB<any>): void;
    start(callback: CB<any>): void;

    pause(options: {}, callback: CB<any>): void;
    pause(callback: CB<any>): void;

    unpause(options: {}, callback: CB<any>): void;
    unpause(callback: CB<any>): void;

    exec(options: {}, callback: CB<any>): void;

    commit(options: {}, callback: CB<any>): void;
    commit(callback: CB<any>): void;

    stop(options: {}, callback: CB<any>): void;
    stop(callback: CB<any>): void;

    restart(options: {}, callback: CB<any>): void;
    restart(callback: CB<any>): void;

    kill(options: {}, callback: CB<any>): void;
    kill(callback: CB<any>): void;

    resize(options: {}, callback: CB<any>): void;
    resize(callback: CB<any>): void;

    wait(callback: CB<any>): void;

    remove(options: {}, callback: CB<any>): void;
    remove(callback: CB<any>): void;

    /** Deprecated since RAPI v1.20 */
    copy(options: {}, callback: CB<any>): void;
    /** Deprecated since RAPI v1.20 */
    copy(callback: CB<any>): void;

    getArchive(options: {}, callback: CB<stream.Readable>): void;

    infoArchive(options: {}, callback: CB<any>): void;

    putArchive(options: {}, callback: CB<stream.Writable>): void;

    logs(options: {}, callback: CB<any>): void;
    logs(callback: CB<any>): void;

    stats(options: {}, callback: CB<any>): void;
    stats(callback: CB<any>): void;
}

declare class Image {
    inspect(callback: CB<any>): void;

    history(callback: CB<any>): void;

    get(callback: CB<stream.Readable>): void;

    push(options: {}, callback: CB<stream.Readable>): void;
    push(callback: CB<stream.Readable>): void;

    tag(options: {}, callback: CB<any>): void;
    tag(callback: CB<any>): void;

    remove(options: {}, callback: CB<any>): void;
    remove(callback: CB<any>): void;
}

declare class Volume {
    inspect(callback: CB<any>): void;

    remove(options: {}, callback: CB<any>): void;
    remove(callback: CB<any>): void;
}

declare class Service {
    inspect(callback: CB<any>): void;

    remove(options: {}, callback: CB<any>): void;
    remove(callback: CB<any>): void;

    update(options: {}, callback: CB<any>): void;
}

declare class Task {
    inspect(callback: CB<any>): void;
}

declare class Node {
    inspect(callback: CB<any>): void;
}

declare class Network {
    inspect(callback: CB<any>): void;

    remove(options: {}, callback: CB<any>): void;
    remove(callback: CB<any>): void;

    connect(options: {}, callback: CB<any>): void;
    connect(callback: CB<any>): void;

    disconnect(options: {}, callback: CB<any>): void;
    disconnect(callback: CB<any>): void;
}

declare class Exec {
    inspect(callback: CB<any>): void;

    start(options: {}, callback: CB<any>): void;

    resize(options: {}, callback: CB<any>): void;
}

