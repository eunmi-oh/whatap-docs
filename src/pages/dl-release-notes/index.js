import React from 'react';
import Service from './service';
import { svList, javaList } from './pdfList.js';
import Layout from '@theme/Layout';

export default function Dlreleasenotes() {
    return (
        <Layout>
            <h1>Release Notes</h1>

            <Service h2title='Service' typeName='service' pdfList={svList} />

            <Service h2title='Java Agent' typeName='java' pdfList={javaList} />
        
        </Layout>
    );
}