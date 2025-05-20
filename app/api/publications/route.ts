import { NextRequest, NextResponse } from 'next/server';
import { readTable, writeTable, updateRecord, deleteRecord } from '@/utils/dbUtils';
import { saveUploadedFile } from '@/utils/file';

export async function GET(req: NextRequest) {
  try {
    const publications = readTable('publications');
    return NextResponse.json({ publications });
  } catch (err) {
    return NextResponse.json({ publications: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get('title')?.toString() || '';
    const authors = formData.get('authors')?.toString() || '';
    const subTitle = formData.get('subTitle')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const pdfFile = formData.get('pdf');

    if (!title || !authors || !subTitle || !description || !pdfFile) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }
    const pdfUrl = await saveUploadedFile(pdfFile);

    let publications = [];
    try {
      publications = readTable('publications');
    } catch (_) {
      publications = [];
    }
    const newPub = {
      id: Date.now(),
      title,
      authors,
      subTitle,
      description,
      pdf: pdfUrl,
    };
    publications.push(newPub);
    writeTable('publications', publications);
    return NextResponse.json({
      message: 'Publication created successfully.',
      publication: newPub,
    });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const id = Number(formData.get('id'));
    const title = formData.get('title')?.toString() || '';
    const authors = formData.get('authors')?.toString() || '';
    const subTitle = formData.get('subTitle')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    let pdfUrl = formData.get('pdf') ? await saveUploadedFile(formData.get('pdf')) : null;

    if (!id || !title || !authors || !subTitle || !description) {
      return NextResponse.json(
        { message: 'id, title, authors, subTitle and description are required.' },
        { status: 400 }
      );
    }
    const updatedData = { title, authors, subTitle, description };
    if (pdfUrl) updatedData.pdf = pdfUrl;
    const updatedPub = updateRecord('publications', id, updatedData);
    return NextResponse.json({
      message: 'Publication updated successfully.',
      publication: updatedPub,
    });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    if (!id) {
      return NextResponse.json(
        { message: 'Publication id is required.' },
        { status: 400 }
      );
    }
    const deletedPub = deleteRecord('publications', id);
    return NextResponse.json({
      message: 'Publication deleted successfully.',
      publication: deletedPub,
    });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
